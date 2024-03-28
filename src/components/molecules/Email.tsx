import { useState, type ChangeEvent } from 'react';
import { Stack, Button as AuthButton, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { Input } from '@/components/atoms';
import { COLOR } from '@/constants';

interface Check {
    blank: null | boolean;
}

interface Auth {
    correct: null | boolean;
}

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
    const [email, setEmail] = useState<Check>({ blank: null });
    const [errorMessage, setErrorMessage] = useState('');

    const [showInput, setShowInput] = useState(false); // 인증 코드 입력칸
    const [AuthNumber, setAuthNumber] = useState<Auth>({ correct: null });
    const [numberErrorMessage, setNumberErrorMessage] = useState('');

    const [AuthInputValue, setAuthInputValue] = useState('');
    const [InputDisabled, setInputDisabled] = useState(false);

    const handleTopChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;

        setEmail((prev) => ({
            ...prev,
            blank: value.length !== 0,
        }));
    };

    const handleBottomChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;

        setAuthInputValue(value);

        setAuthNumber((prev) => ({
            ...prev,
            correct: value === '123456',
        }));
    };

    const handleCheckNickName = () => {
        if (!email.blank) {
            setErrorMessage('이메일을 입력해 주세요.');
        } else {
            setErrorMessage('');
            setShowInput(true);
        }
    };

    const handleCheckNumber = () => {
        if (AuthNumber.correct) {
            setNumberErrorMessage('인증되었습니다.');
            setInputDisabled(true);
        } else {
            setNumberErrorMessage('인증번호가 틀렸습니다.');
            setAuthInputValue('');
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
                    onClick={handleCheckNickName}
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
                        value={AuthInputValue}
                        onChange={handleBottomChange}
                        disabled={InputDisabled}
                    />
                    <AuthButton
                        size="small"
                        sx={{ ...style.button, width: '20px' }}
                        variant="contained"
                        onClick={handleCheckNumber}
                    >
                        확인
                    </AuthButton>
                </Stack>
            )}
            {numberErrorMessage && (
                <Typography variant="body2" color={COLOR.pink.footer} sx={{ pl: '10px' }}>
                    {numberErrorMessage}
                </Typography>
            )}
        </Stack>
    );
};
