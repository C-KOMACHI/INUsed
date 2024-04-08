import type { FC } from 'react';
import { Fab } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { COLOR } from '@/constants';
import { useFlow } from '@/stackflow';

const style = {
    fab: {
        position: 'absolute',
        right: 16,
        bottom: 25,
        backgroundColor: COLOR.blue.fab,
    },
    icon: {
        color: COLOR.white.main,
        fontSize: 45,
    },
};

export const WriteButton: FC = () => {
    const { push } = useFlow();

    const handleClick = () => {
        push('Writer', {});
    };
    return (
        <Fab sx={style.fab} onClick={handleClick}>
            <AddIcon sx={style.icon} />
        </Fab>
    );
};
