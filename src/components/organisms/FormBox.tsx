import type { FC } from 'react';
import { Stack, Box, Button as AuthButton, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { Input, Button, Logo } from '@/components/atoms';
import { NickName } from '@/components/molecules';
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
                        <Stack direction="row" spacing={1.3} alignItems="center">
                            <Input placeholder="학교 이메일" small />
                            <Typography sx={{ fontFamily: 'Jua', color: COLOR.gray.main }}>@inu.ac.kr</Typography>
                            <AuthButton size="small" sx={style.button} variant="contained" endIcon={<SendIcon />}>
                                인증하기
                            </AuthButton>
                        </Stack>
                    </>
                )}
                {login && <Input placeholder="학교 이메일" />} <Input placeholder="비밀번호" />
                {register && <Input placeholder="비밀번호 확인" />}
                {login ? <Button>로그인</Button> : <Button>회원가입</Button>}
            </Stack>
        </Box>
    );
};
