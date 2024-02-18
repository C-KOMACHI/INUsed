import type { FC } from 'react';
import { Stack, Box, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CheckIcon from '@mui/icons-material/Check';
import { Input, LoginButton, Logo } from '@/components/atoms';
import { COLOR } from '@/constants';

const style = {
    container: {
        width: '350px',
        alignItems: 'center',
        padding: '2rem 2rem 0 2rem',
        margin: '7rem 0 0 0',
    },
    button: {
        borderRadius: '30px',
        background: COLOR.blue.button,
        '&:hover': {
            background: COLOR.blue.hover,
        },
    },
};

interface Props {
    login?: boolean;
    register?: boolean;
}
export const FormBox: FC<Props> = ({ login, register }) => {
    return (
        <Box sx={style.container}>
            <Stack spacing={2}>
                <Logo src="Logo.png" alt="logo" />
                {register && (
                    <>
                        <Stack direction="row" spacing={2}>
                            <Input placeholder="닉네임" small />
                            <Button size="small" sx={style.button} variant="contained" endIcon={<CheckIcon />}>
                                중복확인
                            </Button>
                        </Stack>
                        <Stack direction="row" spacing={2}>
                            <Input placeholder="학교 이메일" small />
                            <Button size="small" sx={style.button} variant="contained" endIcon={<SendIcon />}>
                                인증하기
                            </Button>
                        </Stack>
                    </>
                )}
                {login && <Input placeholder="학교 이메일" />} <Input placeholder="비밀번호" />
                {register && <Input placeholder="비밀번호 확인" />}
                {login ? <LoginButton>로그인</LoginButton> : <LoginButton>회원가입</LoginButton>}
            </Stack>
        </Box>
    );
};
