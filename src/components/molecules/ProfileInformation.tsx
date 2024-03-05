import type { FC } from 'react';
import { Stack } from '@mui/material';
import { Profile, Text } from '@/components/atoms';

interface Props {
    alt: string;
    src?: string;
    nickName: string;
    name: string;
    email: string;
}

const style = {
    container: {
        display: 'flex',
        alignItems: 'center',
    },
};
export const ProfileInformation: FC<Props> = ({ alt, src, nickName, name, email }) => {
    return (
        <Stack sx={style.container} spacing={1}>
            <Profile alt={alt} src={src} />
            <Text type="title3">{nickName}</Text>
            <Text type="subtitle1">{name}</Text>
            <Text type="subtitle1">{email}</Text>
        </Stack>
    );
};
