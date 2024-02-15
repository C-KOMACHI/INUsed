import type { FC } from 'react';
import { Stack, Box, Button, Grid } from '@mui/material';
import { COLOR } from '@/constants';

const style = {
    containers: {
        width: '350px',
        alignItems: 'center',
        padding: '0 0 0 2.7rem',
    },
    button: {
        color: `${COLOR.gray.main}`,
        fontFamily: 'Jua',
    },
};

export const Footer: FC = () => {
    return (
        <Box sx={style.containers}>
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
        </Box>
    );
};
