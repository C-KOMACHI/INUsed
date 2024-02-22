import type { FC, PropsWithChildren } from 'react';
import { Typography, type TypographyTypeMap } from '@mui/material';

const variant = {
    title: 'h6',
    subtitle1: 'subtitle2',
    subtitle2: 'body1',
    body: 'body2',
};

const color: Partial<typeof variant> = {
    subtitle1: 'gray',
};

interface Props extends PropsWithChildren {
    type?: 'title' | 'subtitle1' | 'subtitle2' | 'body';
}

const style = {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    fontFamily: 'Jua',
};

export const Text: FC<Props> = ({ children, type = 'title' }) => {
    return (
        <Typography variant={variant[type] as TypographyTypeMap['props']['variant']} color={color[type]} sx={style}>
            {children}
        </Typography>
    );
};
