import type { FC } from 'react';
import { Avatar as ProfileImage } from '@mui/material';

interface Props {
    alt: string;
    src?: string;
    small?: boolean;
}

export const Profile: FC<Props> = ({ alt, src, small }) => {
    return (
        <ProfileImage
            alt={alt}
            src={src}
            sx={{
                width: small ? 50 : 110,
                height: small ? 50 : 110,
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                mb: 2,
            }}
        />
    );
};
