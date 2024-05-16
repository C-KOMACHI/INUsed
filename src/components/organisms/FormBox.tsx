import { type FC, useState, type ChangeEvent } from 'react';
import axios from 'axios';
import { debounce } from 'lodash';
import { Stack, Box, Button as AuthButton, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CheckIcon from '@mui/icons-material/Check';
import { useFlow } from '@/stackflow';
import { Input, Button, Logo } from '@/components/atoms';
import { Email, Password, FormInput } from '@/components/molecules';
import { COLOR } from '@/constants';
import { useRegister, useSendEmail, useCheckAuthCode, useCheckNickname } from '@/hooks';

const style = {
    container: {
        width: '400px',
        alignItems: 'center',
        padding: '0 2rem 0 2rem',
        pt: 15,
    },
    stack: {
        height: '100%',
        alignItems: 'center',
        pt: 15,
    },
    button: {
        borderRadius: '30px',
        background: COLOR.blue.button,
        '&:hover': {
            background: COLOR.blue.hover,
        },
        height: '45px',
        width: '120px',
    },
};

interface Props {
    login?: boolean;
    register?: boolean;
    findPassword?: boolean;
    inquiry?: boolean;
}

interface LoginResponse {
    accessToken: string;
    // 다른 필요한 속성들이 있다면 여기에 추가
}

export const FormBox: FC<Props> = ({ login, register, findPassword, inquiry }) => {
    const { replace } = useFlow();

    const [email, setEmail] = useState('');
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [showInput, setShowInput] = useState(false);
    const [authCode, setAuthCode] = useState('');
    const { isError: emailError, mutate: sendEmail } = useSendEmail(email);
    const [authCodeCall, setAuthCodeCall] = useState(false);
    const { data: codeData, error: authCodeError } = useCheckAuthCode(email, authCode, authCodeCall);

    const handleTopChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setEmail(value);
    };

    const handleBottomChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setAuthCode(value);
    };

    const handleCheckEmail = () => {
        setEmailErrorMessage('');
        if (email.length > 0) {
            if (/^[a-zA-Z0-9._%+-]{2,}$/.test(email)) {
                sendEmail();
                if (emailError) {
                    setEmailErrorMessage('이미 가입된 이메일입니다.');
                } else {
                    setShowInput(true);
                }
            } else {
                setEmailErrorMessage('이메일 형식이 아닙니다.');
            }
        } else {
            setEmailErrorMessage('이메일을 입력해 주세요.');
        }
    };

    const handleCheckCode = () => {
        setAuthCodeCall(true);
    };

    const getCodeErrorMessage = (value: string) => {
        if (value.length > 0) {
            if (authCodeError) {
                return '인증번호가 틀렸습니다.';
            }
            return '인증되었습니다.';
        }
        return '인증번호를 입력해 주세요.';
    };

    const [nickname, setNickname] = useState('');
    const [nicknameCall, setNicknameCall] = useState(false);
    const { data: nicknameData, isError: nicknameError } = useCheckNickname(nickname, nicknameCall);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setNickname(value);
    };

    const handleCheckNickname = () => {
        setNicknameCall(true);
    };

    const getNicknameErrorMessage = (value: string) => {
        if (/^[가-힣\d\w]{1,8}$/.test(value)) {
            if (nicknameError) {
                return '이미 존재하는 닉네임입니다.';
            }
            return '사용 가능한 닉네임입니다.';
        }
        return '닉네임은 특수문자 제외 1~8글자로 입력해 주세요.';
    };

    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
    const [passConfirmErrorMessage, setPassConfirmErrorMessage] = useState('');

    const { push } = useFlow();

    const validatePassword = (pw: string) => {
        return /(?=.*[a-zA-Z0-9])(?=.*[\W_]).{12,}/.test(pw);
    };

    const handlePassChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setPassword(value);

        if (validatePassword(value)) {
            setPasswordErrorMessage('');
        } else {
            setPasswordErrorMessage('비밀번호는 영문자,숫자,특수 문자 포함 12자 이상으로 설정해 주세요.');
        }
    };

    const handleConfirmChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setPasswordConfirm(value);

        if (passwordConfirm !== password) {
            setPassConfirmErrorMessage('비밀번호가 일치하지 않습니다.');
        } else {
            setPassConfirmErrorMessage('');
        }
    };

    const debounceTopHandleChange = debounce(handlePassChange, 500);
    const debounceBottomHandleChange = debounce(handleConfirmChange, 500);

    const [registerCall, setRegisterCall] = useState(false);
    const { data: registerData, isError: registerError } = useRegister(email, nickname, password);

    const RegisterHandleClick = () => {
        setRegisterCall(true);
    };

    const getRegisterErrorMessage = () => {
        if (!registerData || registerError) {
            return '입력된 정보를 확인해 주세요.';
        }

        push('SuccessRegister', {});
        return '회원가입 성공!';
    };

    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [, setLoginError] = useState('');

    const handleLogin = () => {
        axios
            .post<LoginResponse>('https://api.inused.store/api/v1/auth/login', {
                email: id,
                password: pw,
            })
            .then((response) => {
                localStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
                replace('Main', {}, { animate: false });
            })
            .catch(() => {
                setLoginError('로그인에 실패했습니다. 다시 시도해주세요.');
            });
    };

    return (
        <Box sx={style.container}>
            <Stack spacing={2}>
                {!inquiry && <Logo src="Logo.png" alt="logo" />}

                {login && (
                    <>
                        <Input placeholder="학교 이메일" value={id} onChange={(e) => setId(e.target.value)} />
                        <Input
                            placeholder="비밀번호"
                            type="password"
                            value={pw}
                            onChange={(e) => setPw(e.target.value)}
                        />
                        <Button onClick={handleLogin}>로그인</Button>
                    </>
                )}

                {register && (
                    <>
                        <Stack direction="column" spacing={1}>
                            <Stack direction="row" spacing={2}>
                                <Input placeholder="닉네임" medium onChange={handleChange} />
                                <AuthButton
                                    size="small"
                                    sx={style.button}
                                    variant="contained"
                                    endIcon={<CheckIcon />}
                                    onClick={handleCheckNickname}
                                >
                                    중복확인
                                </AuthButton>
                            </Stack>
                            {nicknameData && (
                                <Typography variant="body2" color={COLOR.pink.footer} sx={{ pl: '10px' }}>
                                    {getNicknameErrorMessage(nickname)}
                                </Typography>
                            )}
                        </Stack>
                        <Stack direction="column" spacing={1}>
                            <Stack direction="row" spacing={1.3} alignItems="center">
                                <Input placeholder="학교 이메일" small onChange={handleTopChange} />
                                <Typography sx={{ fontFamily: 'Jua', color: COLOR.gray.main }}>@inu.ac.kr</Typography>
                                <AuthButton
                                    size="small"
                                    sx={style.button}
                                    variant="contained"
                                    endIcon={<SendIcon />}
                                    onClick={handleCheckEmail}
                                >
                                    인증하기
                                </AuthButton>
                            </Stack>
                            {emailErrorMessage && (
                                <Typography variant="body2" color={COLOR.pink.footer} sx={{ pl: '10px' }}>
                                    {emailErrorMessage}
                                </Typography>
                            )}
                            {showInput && (
                                <Stack direction="row" spacing={1}>
                                    <Input
                                        placeholder="인증번호"
                                        small
                                        value={authCode}
                                        onChange={handleBottomChange}
                                    />
                                    <AuthButton
                                        size="small"
                                        sx={{ ...style.button, width: '20px' }}
                                        variant="contained"
                                        onClick={handleCheckCode}
                                    >
                                        확인
                                    </AuthButton>
                                </Stack>
                            )}
                            {codeData && (
                                <Typography variant="body2" color={COLOR.pink.footer} sx={{ pl: '10px' }}>
                                    {getCodeErrorMessage(authCode)}
                                </Typography>
                            )}
                        </Stack>
                        <Stack direction="column" spacing={2}>
                            <Input type="password" placeholder="비밀번호" onChange={debounceTopHandleChange} />
                            {passwordErrorMessage && (
                                <Typography variant="body2" color={COLOR.pink.footer} sx={{ pl: '10px' }}>
                                    {passwordErrorMessage}
                                </Typography>
                            )}
                            <Input type="password" placeholder="비밀번호 확인" onChange={debounceBottomHandleChange} />
                            {passConfirmErrorMessage && (
                                <Typography variant="body2" color={COLOR.pink.footer} sx={{ pl: '10px' }}>
                                    {passConfirmErrorMessage}
                                </Typography>
                            )}
                        </Stack>
                        <Button onClick={RegisterHandleClick}>회원가입</Button>
                        {registerCall && (
                            <Typography variant="body2" color={COLOR.pink.footer} sx={{ pl: '10px' }}>
                                {getRegisterErrorMessage()}
                            </Typography>
                        )}
                    </>
                )}

                {findPassword && (
                    <>
                        <Email />
                        <Password />
                        <Button>확인</Button>
                    </>
                )}

                {inquiry && (
                    <>
                        <FormInput title="제목" placeholder="제목을 입력해주세요." />
                        <FormInput big title="내용" placeholder="내용을 입력해주세요." />
                        <Button>문의하기</Button>
                    </>
                )}
            </Stack>
        </Box>
    );
};
