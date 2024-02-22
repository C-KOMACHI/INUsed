import type { FC } from 'react';
import { Fab } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { COLOR } from '@/constants';

const style = {
    fab: {
        position: 'absolute',
        right: 16,
        bottom: 25,
        boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)',
        backgroundColor: COLOR.white.main,
        border: `1px solid ${COLOR.blue.fab}`,
    },
    icon: {
        color: COLOR.blue.fab,
        fontSize: 50,
        filter: 'drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25))',
    },
};

export const WriteButton: FC = () => {
    return (
        <Fab sx={style.fab}>
            <AddIcon sx={style.icon} />
        </Fab>
    );
};
