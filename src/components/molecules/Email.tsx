import { useState, type ChangeEvent } from 'react';
import { Stack, Button as AuthButton, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { Input } from '@/components/atoms';
import { COLOR } from '@/constants';
import { useSendEmail, useCheckAuthCode } from '@/hooks/apis/mail-query';

const style = {
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

export const Email = () => {
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const [showInput, setShowInput] = useState(false);
    const [authCode, setAuthCode] = useState('');
    const [codeErrorMessage, setCodeErrorMessage] = useState('');

    const [InputDisabled, setInputDisabled] = useState(false);

    const { mutate } = useSendEmail(email);
    const { refetch } = useCheckAuthCode(email, authCode, false);

    const handleTopChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setEmail(value);
    };

    const handleBottomChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setAuthCode(value);
    };

    const validateEmail = (mail: string) => {
        return /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]/.test(mail);
    };

    const handleCheckEmail = () => {
        setInputDisabled(false);
        setShowInput(false);
        setCodeErrorMessage('');
        setErrorMessage('');
        if (email.length > 0) {
            if (validateEmail(email)) {
                try {
                    mutate();
                    setShowInput(true);
                } catch (error) {
                    setErrorMessage('이미 가입된 이메일입니다.');
                }
            } else {
                setErrorMessage('이메일 형식이 아닙니다.');
                setShowInput(false);
            }
        } else {
            setErrorMessage('이메일을 입력해 주세요.');
        }
    };

    const handleCheckCode = () => {
        setCodeErrorMessage('');
        if (authCode.length > 0) {
            refetch()
                .then(() => {
                    setCodeErrorMessage('인증되었습니다.');
                    setInputDisabled(true);
                })
                .catch(() => {
                    setCodeErrorMessage('인증번호가 틀렸습니다.');
                    setAuthCode('');
                });
        } else {
            setCodeErrorMessage('인증번호를 입력해 주세요.');
        }
    };

    return (
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
            {errorMessage && (
                <Typography variant="body2" color={COLOR.pink.footer} sx={{ pl: '10px' }}>
                    {errorMessage}
                </Typography>
            )}
            {showInput && (
                <Stack direction="row" spacing={1}>
                    <Input
                        placeholder="인증번호"
                        small
                        value={authCode}
                        onChange={handleBottomChange}
                        disabled={InputDisabled}
                    />
                    <AuthButton
                        size="small"
                        sx={{ ...style.button, width: '20px' }}
                        variant="contained"
                        onClick={handleCheckCode}
                        disabled={InputDisabled}
                    >
                        확인
                    </AuthButton>
                </Stack>
            )}
            {codeErrorMessage && (
                <Typography variant="body2" color={COLOR.pink.footer} sx={{ pl: '10px' }}>
                    {codeErrorMessage}
                </Typography>
            )}
        </Stack>
    );
};
