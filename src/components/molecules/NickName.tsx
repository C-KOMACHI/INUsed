import { useState, type ChangeEvent } from 'react';
import { debounce } from 'lodash';
import { Stack, Button as AuthButton, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { Input } from '@/components/atoms';
import { COLOR } from '@/constants';

interface Check {
    blank: null | boolean;
    length: null | boolean;
    nickname: null | boolean;
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

export const NickName = () => {
    const [nickName, setNickName] = useState<Check>({ blank: null, length: null, nickname: null });
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;

        setNickName((prev) => ({
            ...prev,
            blank: value.length !== 0,
            length: value.length < 9,
            nickname: value === '유잼잼',
        }));
    };

    const debounceHandleChange = debounce(handleChange, 100);

    const handleCheckNickName = () => {
        if (!nickName.blank) {
            setErrorMessage('닉네임을 입력해 주세요.');
        } else if (!nickName.length) {
            setErrorMessage('닉네임은 8자 이하여야 합니다.');
        } else if (nickName.nickname) {
            setErrorMessage('사용 가능한 닉네임입니다.');
        } else {
            setErrorMessage('');
        }
    };

    return (
        <Stack direction="column" spacing={1}>
            <Stack direction="row" spacing={2}>
                <Input placeholder="닉네임" medium onChange={debounceHandleChange} />
                <AuthButton
                    size="small"
                    sx={style.button}
                    variant="contained"
                    endIcon={<CheckIcon />}
                    onClick={handleCheckNickName}
                >
                    중복확인
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
