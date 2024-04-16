import type { FC } from 'react';
import { Stack } from '@mui/material';
import { Input, Text } from '@/components/atoms';

interface Props {
    title: string;
    placeholder: string;
    id?: string;
    big?: boolean;
}

export const FormInput : FC<Props> = ({title, placeholder, id, big}) => {
    return (
        <Stack>
            <Text type='small'>{title}</Text>
            <Input placeholder={placeholder} big={big} id={id}/>
        </Stack>
    );
};
