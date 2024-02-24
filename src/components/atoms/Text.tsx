import type { FC, PropsWithChildren } from 'react';
import { Typography, type TypographyTypeMap } from '@mui/material';
import { COLOR } from '@/constants';

const variant = {
    title1: 'h6',
    title2: 'h5',
    subtitle1: 'subtitle1',
    subtitle2: 'subtitle2',
    body1: 'body1',
    body2: 'body2',
};

const color: Partial<typeof variant> = {
    subtitle1: 'gray',
    title2: COLOR.gray.hover,
};

interface Props extends PropsWithChildren {
    type?: 'title1' | 'title2' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2';
}

const style = {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    fontFamily: 'Jua',
};

export const Text: FC<Props> = ({ children, type = 'title1' }) => {
    return (
        <Typography variant={variant[type] as TypographyTypeMap['props']['variant']} color={color[type]} sx={style}>
            {children}
        </Typography>
    );
};
