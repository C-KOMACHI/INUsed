import { Stack, Button as AuthButton, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { Input } from '@/components/atoms';
import { COLOR } from '@/constants';

const style = {
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

export const Email = () => {
    return (
        <Stack direction="column" spacing={1}>
            <Stack direction="row" spacing={1.3} alignItems="center">
                <Input placeholder="학교 이메일" small />
                <Typography sx={{ fontFamily: 'Jua', color: COLOR.gray.main }}>@inu.ac.kr</Typography>
                <AuthButton size="small" sx={style.button} variant="contained" endIcon={<SendIcon />}>
                    인증하기
                </AuthButton>
            </Stack>
        </Stack>
    );
};
