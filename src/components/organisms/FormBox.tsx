import type { FC } from 'react';
import { Stack, Box } from '@mui/material';
import { Input, LoginButton, Logo } from '@/components/atoms';

const style = {
    width: '350px',
    alignItems: 'center',
    padding: '2rem 2rem 0 2rem',
};

interface Props {
    login?: boolean;
    register?: boolean;
}
export const FormBox: FC<Props> = ({ login, register }) => {
    return (
        <Box sx={style}>
            <Stack spacing={2}>
                <Logo src="Logo.png" alt="logo" />
                {register && <Input placeholder="닉네임" />}
                <Input placeholder="학교 이메일" />
                <Input placeholder="비밀번호" />
                {register && <Input placeholder="비밀번호 확인" />}
                {login ? <LoginButton>로그인</LoginButton> : <LoginButton>회원가입</LoginButton>}
            </Stack>
        </Box>
    );
};
