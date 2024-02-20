import { type FC, useState } from 'react';
import { FavoriteBorder as EmptyIcon, Favorite as FilledIcon, PropaneSharp } from '@mui/icons-material';
import { Stack, Typography } from '@mui/material';
import { COLOR } from '@/constants';

interface Props {
    filled: 'boolean';
}

const style = {
    container: {
        position: 'absolute',
        bottom: '0',
        right: '2rem',
    },
    icon: {
        fontSize: 23,
        cursor: 'pointer',
        color: COLOR.gray.main,
    },
    text: {
        color: COLOR.gray.main,
    },
};

export const HeartIcon: FC = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [heart, setHeart] = useState(0);

    const handleClick = () => {
        setIsClicked(!isClicked);
        setHeart(heart + (isClicked ? -1 : 1));
    };

    return (
        <Stack direction="row" spacing={0.5} sx={style.container} onClick={handleClick}>
            {isClicked ? <FilledIcon sx={{ ...style.icon, color: COLOR.red }} /> : <EmptyIcon sx={style.icon} />}
            <Typography sx={style.text}>{heart}</Typography>
        </Stack>
    );
};
