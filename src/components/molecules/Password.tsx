import { useState, type ChangeEvent } from 'react';
import { debounce } from 'lodash';
import { Stack, Typography } from '@mui/material';
import { Input } from '@/components/atoms';
import { COLOR } from '@/constants';

export const Password = () => {
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [passConfirmErrorMessage, setPassConfirmErrorMessage] = useState('');

    const validatePassword = (pw: string) => {
        return /(?=.*[a-zA-Z0-9])(?=.*[\W_]).{12,}/.test(pw);
    };

    const handleTopChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setPassword(value);

        if (validatePassword(value)) {
            setErrorMessage('');
        } else {
            setErrorMessage('비밀번호는 영문자,숫자,특수 문자 포함 12자 이상으로 설정해 주세요.');
        }

        if (value !== passwordConfirm) {
            setPassConfirmErrorMessage('비밀번호가 일치하지 않습니다.');
        } else {
            setPassConfirmErrorMessage('');
        }
    };

    const handleBottomChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setPasswordConfirm(value);

        if (value !== password) {
            setPassConfirmErrorMessage('비밀번호가 일치하지 않습니다.');
        } else {
            setPassConfirmErrorMessage('');
        }
    };

    const debounceTopHandleChange = debounce(handleTopChange, 500);
    const debounceBottomHandleChange = debounce(handleBottomChange, 500);

    return (
        <Stack direction="column" spacing={2}>
            <Input type="password" placeholder="비밀번호" onChange={debounceTopHandleChange} />
            {errorMessage && (
                <Typography variant="body2" color={COLOR.pink.footer} sx={{ pl: '10px' }}>
                    {errorMessage}
                </Typography>
            )}
            <Input type="password" placeholder="비밀번호 확인" onChange={debounceBottomHandleChange} />
            {passConfirmErrorMessage && (
                <Typography variant="body2" color={COLOR.pink.footer} sx={{ pl: '10px' }}>
                    {passConfirmErrorMessage}
                </Typography>
            )}
        </Stack>
    );
};
