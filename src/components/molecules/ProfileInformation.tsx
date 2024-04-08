import type { FC } from 'react';
import { Stack } from '@mui/material';
import { Profile, Text, Temperature } from '@/components/atoms';

interface Props {
    alt: string;
    src?: string;
    nickName: string;
    email: string;
    temperature: number;
}

const style = {
    container: {
        alignItems: 'center',
    },
};
export const ProfileInformation: FC<Props> = ({ alt, src, nickName, email, temperature }) => {
    return (
        <Stack spacing={2} sx={{ px: 3, pt: 4 }}>
            <Stack sx={style.container}>
                <Profile alt={alt} src={src} />
                <Text type="h6">{nickName}</Text>
                <Text type="subtitle2">{email}</Text>
            </Stack>
            <Temperature temperature={temperature} />
        </Stack>
    );
};
