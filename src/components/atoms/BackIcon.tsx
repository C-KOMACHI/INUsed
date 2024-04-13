import type { FC } from 'react';
import { ArrowBackIosNewRounded as Icon } from '@mui/icons-material';
import { COLOR } from '@/constants';
import { useFlow } from '@/stackflow';

const style = {
    position: 'absolute',
    left: 40,
    marginLeft: -3,
    color: COLOR.gray.main,
    cursor: 'pointer',
    fontSize: '25px',
};

export const BackIcon: FC = () => {
    const { pop } = useFlow();

    const handleClick = () => {
        pop();
    };
    return <Icon sx={style} onClick={handleClick} />;
};
