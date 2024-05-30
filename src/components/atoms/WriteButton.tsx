import type { FC } from 'react';
import { Fab } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { useFlow } from '@/stackflow';
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
    const { push } = useFlow();

    return (
        <Fab sx={style.fab} onClick={() => push('Writer', {})}>
            <AddIcon sx={style.icon} />
        </Fab>
    );
};
