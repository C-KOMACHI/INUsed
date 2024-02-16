import type { FC } from 'react';
import { Stack, Box, Button, Grid } from '@mui/material';
import styled from '@emotion/styled';
import { useFlow } from '@/stackflow';
import { COLOR } from '@/constants';

const style = {
    container1: {
        width: '350px',
        padding: '0.5rem 0 0 2.7rem',
        display: 'flex',
    },
    container2: {
        width: '350px',
        padding: '0.5rem 0 0 15.5rem',
        display: 'flex',
    },
    button: {
        color: COLOR.gray.main,
        fontFamily: 'Jua',
    },
};

const StyledFooter = styled.div`
    p {
        font-size: 0.9rem;
        font-family: 'Jura';
        color: ${COLOR.pink.footer};
        padding-top: 3rem;
        text-align: center;
    }
`;

interface Props {
    login?: boolean;
    register?: boolean;
}

export const Footer: FC<Props> = ({ login, register }) => {
    const { push } = useFlow();
    const { pop } = useFlow();

    const handleClickRegister = () => {
        push('Register', {
            title: '회원 가입',
        });
    };
    const handleClickLogin = () => {
        pop();
    };
    return (
        <StyledFooter>
            <Stack>
                <Box sx={style.container1}>
                    <Stack direction="row" spacing={15}>
                        <Grid item xs={6}>
                            {login && (
                                <Button size="small" sx={style.button}>
                                    비밀번호 찾기
                                </Button>
                            )}
                        </Grid>
                        <Grid item xs={6}>
                            {login && (
                                <Button size="small" sx={style.button} onClick={handleClickRegister}>
                                    회원 가입
                                </Button>
                            )}
                        </Grid>
                    </Stack>
                </Box>
                <Box sx={style.container2}>
                    <Stack>
                        {register && (
                            <Button size="small" sx={style.button} onClick={handleClickLogin}>
                                로그인하기
                            </Button>
                        )}
                    </Stack>
                </Box>

                <p>Product By C-Komachi</p>
            </Stack>
        </StyledFooter>
    );
};
