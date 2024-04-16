import type { FC } from 'react';
import { Stack, Box } from '@mui/material';
import { useFlow } from '@/stackflow';
import { Input, Button, Logo } from '@/components/atoms';
import { NickName, Email, Password, FormInput } from '@/components/molecules';
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
    },
};

interface Props {
    login?: boolean;
    register?: boolean;
    findPassword?: boolean;
    inquiry?: boolean;
}
export const FormBox: FC<Props> = ({ login, register, findPassword, inquiry }) => {
    const { replace } = useFlow();

    const handleClick = (page: 'Main' | 'Login') => {
        replace(page, {}, { animate: false });
    };

    return (
        <Box sx={style.container}>
            <Stack spacing={2}>
                {!inquiry && <Logo src="Logo.png" alt="logo" />}

                {login && (
                    <>
                        <Input placeholder="학교 이메일" />
                        <Input placeholder="비밀번호" />
                        <Button onClick={() => handleClick('Main')}>로그인</Button>
                    </>
                )}

                {register && (
                    <>
                        <NickName />
                        <Email />
                        <Password />
                        <Button onClick={() => handleClick('Login')}>회원가입</Button>
                    </>
                )}

                {findPassword && (
                    <>
                        <Email />
                        <Password />
                        <Button onClick={() => handleClick('Login')}>확인</Button>
                    </>
                )}

                {inquiry && (
                    <>
                        <FormInput title='제목' placeholder='제목을 입력해주세요.' />
                        <FormInput big title='내용' placeholder='내용을 입력해주세요.' />
                        <Button>문의하기</Button>
                    </>
                )}
            </Stack>
        </Box>
    );
};
