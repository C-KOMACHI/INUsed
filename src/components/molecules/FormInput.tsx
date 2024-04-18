import type { FC } from 'react';
import { Stack } from '@mui/material';
import { Input, Text } from '@/components/atoms';

interface Props {
    title: string;
    placeholder: string;
    id?: string;
    big?: boolean;
}

export const FormInput: FC<Props> = ({ title, placeholder, id, big }) => {
    return (
        <Stack sx={{width: '100%'}}>
            <Text type="medium">{title}</Text>
            <Input placeholder={placeholder} big={big} id={id} />
        </Stack>
    );
};
