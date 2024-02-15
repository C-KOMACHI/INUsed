import type { FC } from 'react';
import { Stack, Box } from '@mui/material';
import { Input, Button, Logo } from '@/components/atoms';

const style = {
    width: '350px',
    alignItems: 'center',
    padding: '2rem',
};
export const FormBox: FC = () => {
    return (
        <Box sx={style}>
            <Stack spacing={2}>
                <Logo src="Logo.png" alt="logo" />
                <Input placeholder="이메일" />
                <Input placeholder="비밀번호" />
                <Button>로그인</Button>
            </Stack>
        </Box>
    );
};
