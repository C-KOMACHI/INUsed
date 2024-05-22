import { type FC, type CSSProperties, useState } from 'react';
import axios from 'axios';
import { Stack, Typography } from '@mui/material';
import { FavoriteBorder as EmptyIcon, Favorite as FilledIcon } from '@mui/icons-material';
import { COLOR } from '@/constants';

interface Props {
    direction?: 'row' | 'column';
    spacing?: '0.5' | '0';
    containerStyle?: CSSProperties;
    textStyle?: CSSProperties;
    wishCount?: number;
    checkLiked?: boolean;
    id?: number;
}

const style = {
    container: {
        position: 'absolute',
        bottom: 0,
        right: '25px',
        width: '25px',
        zIndex: 0,
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

export const HeartIcon: FC<Props> = ({
    direction = 'row',
    spacing = '0.5',
    containerStyle,
    textStyle,
    wishCount,
    checkLiked,
    id,
}) => {
    const [isClicked, setIsClicked] = useState(checkLiked);
    const [heart, setHeart] = useState(wishCount ?? 0);

    const changeClicked = () => {
        const accessToken = localStorage.getItem('accessToken');

        axios
            .post(
                'https://api.inused.store/api/v1/wishes/click',
                { postId: id },
                { headers: { Authorization: accessToken } },
            )
            .then(() => {})
            .catch(() => {});
    };

    const handleClick = () => {
        setIsClicked(!isClicked);
        setHeart(heart + (isClicked ? -1 : 1));
        changeClicked();
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
