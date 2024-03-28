import { useState, type ChangeEvent } from 'react';
import { debounce } from 'lodash';
import { Stack, Typography } from '@mui/material';
import { Input } from '@/components/atoms';
import { COLOR } from '@/constants';

interface PassCheck {
    password: null | boolean;
    length: null | boolean;
}

interface PassConfirmCheck {
    passwordConfirm: null | boolean;
}

export const Password = () => {
    const [password, setPassword] = useState<PassCheck>({ password: null, length: null });
    const [passwordConfirm, setPasswordConfirm] = useState<PassConfirmCheck>({ passwordConfirm: null });
    const [errorMessage, setErrorMessage] = useState('');
    const [passConfirmErrorMessage, setPassConfirmErrorMessage] = useState('');

    const handleTopChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;

        setPassword((prev) => ({
            ...prev,
            password: /(?=.*[a-zA-Z0-9])(?=.*[\W_]).{8,}/.test(value),
            length: value.length < 12,
        }));

        if (!password.password) {
            setErrorMessage('비밀번호는 영문자,숫자,특수 문자 포함 12자 이상으로 설정해 주세요.');
        } else if (!password.length) {
            setErrorMessage('비밀번호는 영문자,숫자,특수 문자 포함 12자 이상으로 설정해 주세요.');
        } else {
            setErrorMessage('');
        }
    };

    const handleBottomChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;

        setPasswordConfirm((prev) => ({
            ...prev,
            passwordConfirm: value === '!minhyuk1103',
        }));

        if (passwordConfirm.passwordConfirm) {
            setPassConfirmErrorMessage('');
        } else {
            setPassConfirmErrorMessage('비밀번호가 일치하지 않습니다.');
        }
    };

    const debounceTopHandleChange = debounce(handleTopChange, 500);
    const debounceBottomHandleChange = debounce(handleBottomChange, 500);

    return (
        <Stack direction="column" spacing={1}>
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
