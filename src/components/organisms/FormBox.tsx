import type { FC } from 'react';
import { Stack, Box } from '@mui/material';
import { Input, LoginButton, Logo } from '@/components/atoms';

const style = {
    width: '350px',
    alignItems: 'center',
    padding: '2rem 2rem 0 2rem',
};
export const FormBox: FC = () => {
    return (
        <Box sx={style}>
            <Stack spacing={2}>
                <Logo src="Logo.png" alt="logo" />
                <Input placeholder="이메일" />
                <Input placeholder="비밀번호" />
                <LoginButton>로그인</LoginButton>
            </Stack>
        </Box>
    );
};
