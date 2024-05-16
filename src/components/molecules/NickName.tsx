import { useState, type ChangeEvent } from 'react';
import { Stack, Button as AuthButton, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { Input } from '@/components/atoms';
import { COLOR } from '@/constants';
import { useCheckNickname } from '@/hooks';

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

export const NickName = () => {
    const [nickname, setNickname] = useState('');
    const [call, setCall] = useState(false);
    const { data, isError } = useCheckNickname(nickname, call);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setNickname(value);
    };

    const handleCheckNickname = () => {
        setCall(true);
    };

    const getErrorMessage = (value: string) => {
        if (/^[가-힣\d\w]{1,8}$/.test(value)) {
            if (isError) {
                return '이미 존재하는 닉네임입니다.';
            }
            return '사용 가능한 닉네임입니다.';
        }
        return '닉네임은 특수문자 제외 1~8글자로 입력해 주세요.';
    };

    return (
        <Stack direction="column" spacing={1}>
            <Stack direction="row" spacing={2}>
                <Input placeholder="닉네임" medium onChange={handleChange} />
                <AuthButton
                    size="small"
                    sx={style.button}
                    variant="contained"
                    endIcon={<CheckIcon />}
                    onClick={handleCheckNickname}
                >
                    중복확인
                </AuthButton>
            </Stack>
            {data && (
                <Typography variant="body2" color={COLOR.pink.footer} sx={{ pl: '10px' }}>
                    {getErrorMessage(nickname)}
                </Typography>
            )}
        </Stack>
    );
};
