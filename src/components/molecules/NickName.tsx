import { useState, type ChangeEvent } from 'react';
import { Stack, Button as AuthButton, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { Input } from '@/components/atoms';
import { COLOR } from '@/constants';
import { useCheckNickname } from '@/hooks/apis/auth-query';

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

export const NickName = () => {
    const [nickName, setNickName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const { refetch } = useCheckNickname(nickName, false);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setNickName(value);
    };

    const validateNickname = (nickname: string) => {
        return /^[가-힣\d\w]{1,8}$/.test(nickname);
    };

    const handleCheckNickname = () => {
        setErrorMessage('');
        if (validateNickname(nickName)) {
            refetch()
                .then(() => {
                    setErrorMessage('사용 가능한 닉네임입니다.');
                })
                .catch(() => {
                    setErrorMessage('이미 존재하는 닉네임입니다.');
                });
        } else {
            setErrorMessage('닉네임은 특수문자 제외 1~8글자로 입력해 주세요.');
        }
    };

    return (
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
            {errorMessage && (
                <Typography variant="body2" color={COLOR.pink.footer} sx={{ pl: '10px' }}>
                    {errorMessage}
                </Typography>
            )}
        </Stack>
    );
};
