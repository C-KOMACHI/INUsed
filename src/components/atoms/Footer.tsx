import type { FC } from 'react';
import { Stack, Box, Button, Grid } from '@mui/material';
import styled from '@emotion/styled';
import { useFlow } from '@/stackflow';
import { COLOR } from '@/constants';

const style = {
    container1: {
        width: '400px',
        padding: '0.5rem 0 0 2.7rem',
        display: 'flex',
        position: 'relative',
    },
    button: {
        color: COLOR.gray.main,
        fontFamily: 'Jua',
    },
};

const StyledFooter = styled.div`
    p {
        position: absolute;
        bottom: 0;
        margin-left: 8rem;
        font-size: 0.9rem;
        font-family: 'Jura';
        color: ${COLOR.pink.footer};
    }
`;

export const Footer: FC = () => {
    const { push } = useFlow();

    const handleClickRegister = () => {
        push('Register', {
            title: '회원 가입',
        });
    };
    return (
        <StyledFooter>
            <Stack>
                <Box sx={style.container1}>
                    <Stack direction="row" spacing={22}>
                        <Grid item xs={6}>
                            <Button size="small" sx={style.button}>
                                비밀번호 찾기
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button size="small" sx={style.button} onClick={handleClickRegister}>
                                회원 가입
                            </Button>
                        </Grid>
                    </Stack>
                </Box>
                <p>Product By C-Komachi</p>
            </Stack>
        </StyledFooter>
    );
};
