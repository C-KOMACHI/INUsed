import type { FC } from 'react';
import { Box } from '@mui/material';
import { Text, BackIcon } from '@/components/atoms';
import { COLOR } from '@/constants';

interface Props {
    title?: string;
    backIcon?: boolean;
}

const style = {
    container: {
        backgroundColor: COLOR.blue.main,
        padding: '10px',
        position: 'sticky',
        width: 1,
        zIndex: 1,
        top: 0,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        display: 'flex',
        height: '60px',
    },
    button: {
        color: COLOR.gray.main,
        margin: '0 12px',
    },
};
export const AppBar: FC<Props> = ({ title, backIcon }) => {
    return (
        <Box sx={style.container}>
            {backIcon && <BackIcon />}
            <Text type="largeGray">{title}</Text>
        </Box>
    );
};
