import type { FC } from 'react';
import { Box } from '@mui/material';
import { Text } from '@/components/atoms';
import { COLOR } from '@/constants';

interface Props {
    title?: string;
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
export const AppBar: FC<Props> = ({ title }) => {
    return (
        <Box sx={style.container}>
            <Text type="largeGray">{title}</Text>
        </Box>
    );
};
