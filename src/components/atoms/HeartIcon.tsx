import { type FC, type CSSProperties, useState } from 'react';
import { Stack, Typography } from '@mui/material';
import { FavoriteBorder as EmptyIcon, Favorite as FilledIcon } from '@mui/icons-material';
import { COLOR } from '@/constants';

interface Props {
    direction?: 'row' | 'column';
    spacing?: '0.5' | '0';
    containerStyle?: CSSProperties;
    textStyle?: CSSProperties;
}

const style = {
    container: {
        position: 'absolute',
        bottom: 0,
        right: '2.3rem',
        width: '25px',
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

export const HeartIcon: FC<Props> = ({ direction = 'row', spacing = '0.5', containerStyle, textStyle }) => {
    const [isClicked, setIsClicked] = useState(false);
    const [heart, setHeart] = useState(0);

    const handleClick = () => {
        setIsClicked(!isClicked);
        setHeart(heart + (isClicked ? -1 : 1));
    };

    return (
        <Stack
            direction={direction}
            spacing={spacing}
            sx={{ ...style.container, ...containerStyle }}
            onClick={handleClick}
        >
            {isClicked ? <FilledIcon sx={{ ...style.icon, color: COLOR.red.temp }} /> : <EmptyIcon sx={style.icon} />}
            <Typography sx={{ ...style.text, ...textStyle }}>{heart}</Typography>
        </Stack>
    );
};
