import type { FC } from 'react';
import { Avatar as ProfileImage } from '@mui/material';

interface Props {
    alt: string;
    src?: string;
}

export const Profile: FC<Props> = ({ alt, src }) => {
    return <ProfileImage alt={alt} src={src} sx={{ width: 110, height: 110 }} />;
};
