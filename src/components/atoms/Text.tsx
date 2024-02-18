import type { FC, PropsWithChildren } from 'react';
import { Typography, type TypographyTypeMap } from '@mui/material';

const variant = {
    title: 'h6',
    subtitle: 'subtitle2',
    body: 'body1',
};

const color: Partial<typeof variant> = {
    subtitle: 'gray',
};

interface Props extends PropsWithChildren {
    type?: 'title' | 'subtitle' | 'body';
}

const style = {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    fontFamily: 'Jua',
};

export const Text: FC<Props> = ({ children, type = 'body' }) => {
    return (
        <Typography variant={variant[type] as TypographyTypeMap['props']['variant']} color={color[type]} sx={style}>
            {children}
        </Typography>
    );
};
