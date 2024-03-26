import type { FC, PropsWithChildren } from 'react';
import { Typography, type TypographyTypeMap } from '@mui/material';
import { COLOR } from '@/constants';

const variant = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    subtitle1: 'subtitle1',
    subtitle2: 'subtitle2',
    body1: 'body1',
    body2: 'body2',
};

const color: Partial<typeof variant> = {
    subtitle1: 'gray',
    h5: COLOR.gray.hover,
    h6: COLOR.white.main,
    body2: COLOR.gray.main,
};

interface Props extends PropsWithChildren {
    type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2';
}

const style = {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    fontFamily: 'Jua',
};

export const Text: FC<Props> = ({ children, type = 'body1' }) => {
    return (
        <Typography variant={variant[type] as TypographyTypeMap['props']['variant']} color={color[type]} sx={style}>
            {children}
        </Typography>
    );
};
