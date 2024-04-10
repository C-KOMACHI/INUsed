import type { FC } from 'react';
import { Fab } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { COLOR } from '@/constants';

const style = {
    fab: {
        backgroundColor: COLOR.blue.fab,
        position: 'absolute',
        right: 15,
        bottom: 80,
    },
    icon: {
        color: COLOR.white.main,
        fontSize: 45,
    },
};

export const WriteButton: FC = () => {
    return (
        <Fab sx={style.fab}>
            <AddIcon sx={style.icon} />
        </Fab>
    );
};
