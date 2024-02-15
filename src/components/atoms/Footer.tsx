import type { FC } from 'react';
import { Stack, Box, Button, Grid } from '@mui/material';
import styled from '@emotion/styled';
import { COLOR } from '@/constants';

const style = {
    containers: {
        width: '350px',
        padding: '0.5rem 0 0 2.7rem',
        display: 'flex',
    },
    button: {
        color: `${COLOR.gray.main}`,
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

export const Footer: FC = () => {
    return (
        <StyledFooter>
            <Box sx={style.containers}>
                <Stack>
                    <Stack direction="row" spacing={15}>
                        <Grid item xs={6}>
                            <Button size="small" sx={style.button}>
                                비밀번호 찾기
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button size="small" sx={style.button}>
                                회원 가입
                            </Button>
                        </Grid>
                    </Stack>
                    <p>Product By C-Komachi</p>
                </Stack>
            </Box>
        </StyledFooter>
    );
};
