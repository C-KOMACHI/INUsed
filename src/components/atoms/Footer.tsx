import type { FC } from 'react';
import { Stack, Box, Button, Grid } from '@mui/material';
import { useFlow } from '@/stackflow';
import { COLOR } from '@/constants';

const style = {
    container1: {
        width: '400px',
        padding: '0 0 0 2.5rem',
        display: 'flex',
        position: 'relative',
    },
    button: {
        color: COLOR.gray.main,
        fontFamily: 'Jua',
    },
};

export const Footer: FC = () => {
    const { push } = useFlow();

    const handleClick = (iconName: 'Register' | 'FindPassword') => {
        push(iconName === 'Register' ? 'Register' : 'FindPassword', {}, { animate: false });
    };

    return (
        <Stack>
            <Box sx={style.container1}>
                <Stack direction="row" spacing={22}>
                    <Grid item xs={6}>
                        <Button size="small" sx={style.button} onClick={() => handleClick('FindPassword')}>
                            비밀번호 찾기
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button size="small" sx={style.button} onClick={() => handleClick('Register')}>
                            회원 가입
                        </Button>
                    </Grid>
                </Stack>
            </Box>
        </Stack>
    );
};
