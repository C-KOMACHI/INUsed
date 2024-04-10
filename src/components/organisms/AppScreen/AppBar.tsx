import type { FC } from 'react';
import { Box, AppBar as Bar } from '@mui/material';
import { Text } from '@/components/atoms';
import { COLOR } from '@/constants';

interface Props {
    title?: string;
}

const style = {
    container: {
        backgroundColor: COLOR.blue.main,
        padding: '10px',
        alignItems: 'center',
    },
    button: {
        color: COLOR.gray.main,
        margin: '0 12px',
    },
};
export const AppBar: FC<Props> = ({ title }) => {
    return (
        <Box sx={{ flexGrow: '1' }}>
            <Bar position="static" sx={style.container}>
                <Text type="subtitle2">{title}</Text>
            </Bar>
        </Box>
    );
};
