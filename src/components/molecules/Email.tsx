import { useState, type ChangeEvent } from 'react';
import { debounce } from 'lodash';
import { Stack, Button as AuthButton, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Check';
import { Input } from '@/components/atoms';
import { COLOR } from '@/constants';

interface Check {
    blank: null | boolean;
}

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
    const [email, setEmail] = useState<Check>({ blank: null });
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;

        setEmail((prev) => ({
            ...prev,
            blank: value.length !== 0,
        }));
    };

    const debounceHandleChange = debounce(handleChange, 100);

    const handleCheckNickName = () => {
        if (!email.blank) {
            setErrorMessage('이메일을 입력해 주세요.');
        } else {
            setErrorMessage('');
        }
    };

    return (
        <Stack direction="column" spacing={1}>
            <Stack direction="row" spacing={1.3} alignItems="center">
                <Input placeholder="학교 이메일" small onChange={debounceHandleChange} />
                <Typography sx={{ fontFamily: 'Jua', color: COLOR.gray.main }}>@inu.ac.kr</Typography>
                <AuthButton
                    size="small"
                    sx={style.button}
                    variant="contained"
                    endIcon={<SendIcon />}
                    onClick={handleCheckNickName}
                >
                    인증하기
                </AuthButton>
            </Stack>
            {errorMessage && (
                <Typography variant="body2" color={COLOR.pink.footer} sx={{ pl: '10px' }}>
                    {errorMessage}
                </Typography>
            )}
        </Stack>
    );
};
