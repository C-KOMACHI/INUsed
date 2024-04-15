import type { FC } from 'react';
import { Stack, Box } from '@mui/material';
import { useFlow } from '@/stackflow';
import { Input, Button, Logo } from '@/components/atoms';
import { NickName, Email, Password } from '@/components/molecules';
import { COLOR } from '@/constants';

const style = {
    container: {
        width: '400px',
        alignItems: 'center',
        padding: '0 2rem 0 2rem',
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
    stack: {
        height: '100%',
        alignItems: 'center',
        pt: 15,
    }
};

interface Props {
    login?: boolean;
    register?: boolean;
    findPassword?: boolean;
}
export const FormBox: FC<Props> = ({ login, register, findPassword }) => {
    const { replace } = useFlow();

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
                {findPassword && (
                        <Email />
                )}
                {login && (
                    <>
                        <Input placeholder="학교 이메일" />
                        <Input placeholder="비밀번호" />
                    </>
                )}
                {!login && <Password />}

                {login && (
                    <Button onClick={() => replace('Main', {}, { animate: false })}>로그인</Button>
                )}
                {register && (
                    <Button onClick={() => replace('Login', {}, { animate: false })}>회원가입</Button>
                )}
                {findPassword && (
                    <Button onClick={() => replace('Login', {}, { animate: false })}>확인</Button>
                )}
            </Stack>
        </Box>
    );
};
