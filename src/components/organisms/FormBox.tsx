import type { FC } from 'react';
import { Stack, Box } from '@mui/material';
import { Input, Button, Logo } from '@/components/atoms';
import { NickName, Email } from '@/components/molecules';
import { COLOR } from '@/constants';

const style = {
    container: {
        width: '400px',
        alignItems: 'center',
        padding: '0rem 2rem 0 2rem',
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
}
export const FormBox: FC<Props> = ({ login, register }) => {
    return (
        <Box sx={style.container}>
            <Stack spacing={2}>
                <Logo src="Logo.png" alt="logo" />
                {register && (
                    <>
                        <NickName />
                        <Email />
                    </>
                )}
                {login && <Input placeholder="학교 이메일" />} <Input placeholder="비밀번호" />
                {register && <Input placeholder="비밀번호 확인" />}
                {login ? <Button>로그인</Button> : <Button>회원가입</Button>}
            </Stack>
        </Box>
    );
};
