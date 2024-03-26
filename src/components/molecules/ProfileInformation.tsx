import type { FC } from 'react';
import { Stack } from '@mui/material';
import { Profile, Text, Temperature } from '@/components/atoms';

interface Props {
    alt: string;
    src?: string;
    nickName: string;
    name: string;
    email: string;
    temperature: number;
}

const style = {
    container: {
        alignItems: 'center',
    },
};
export const ProfileInformation: FC<Props> = ({ alt, src, nickName, name, email, temperature }) => {
    return (
        <Stack sx={{ width: 0.9 }} spacing={3}>
            <Stack sx={style.container} spacing={1}>
                <Profile alt={alt} src={src} />
                <Text type="h6">{nickName}</Text>
                <Text type="subtitle1">{name}</Text>
                <Text type="subtitle1">{email}</Text>
            </Stack>
            <Temperature temperature={temperature} />
        </Stack>
    );
};
