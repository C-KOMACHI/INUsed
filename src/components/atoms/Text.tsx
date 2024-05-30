import type { FC, PropsWithChildren } from 'react';
import { Typography, type TypographyVariant } from '@mui/material';
import { COLOR } from '@/constants';

const variant = {
    large: 'h6',
    medium: 'subtitle1',
    small: 'caption',
    largeGray: 'h6',
    mediumGray: 'subtitle1',
    smallGray: 'caption',
};

const color: Partial<typeof variant> = {
    largeGray: 'gray',
    mediumGray: 'gray',
    smallGray: COLOR.gray.main,
};

interface Props extends PropsWithChildren {
    type?: 'large' | 'medium' | 'small' | 'largeGray' | 'mediumGray' | 'smallGray';
}

const style = {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    wordWrap: 'break-word',
    display: 'block',
};

export const Text: FC<Props> = ({ children, type = 'large' }) => {
    return (
        <Typography variant={variant[type as keyof typeof variant] as TypographyVariant} color={color[type]} sx={style}>
            {children}
        </Typography>
    );
};
