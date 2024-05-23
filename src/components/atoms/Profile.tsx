import type { FC } from 'react';
import { Avatar as ProfileImage } from '@mui/material';

interface Props {
    src?: string;
    small?: boolean;
}

export const Profile: FC<Props> = ({ src, small }) => {
    return (
        <ProfileImage
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
