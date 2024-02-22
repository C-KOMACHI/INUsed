import { type FC, useState } from 'react';
import { FavoriteBorder as EmptyIcon, Favorite as FilledIcon } from '@mui/icons-material';
import { Stack, Typography } from '@mui/material';
import { COLOR } from '@/constants';
import { CSSProperties } from 'styled-components';
interface Props {
    direction?: 'row' | 'column';
    containerStyle?: CSSProperties;
}

const style = {
    container: (props: Props) => ({
        position: 'absolute',
        bottom: 0,
        right: '2rem',
        ...props.containerStyle,
    }),
    icon: {
        fontSize: 23,
        cursor: 'pointer',
        color: COLOR.gray.main,
    },
    text: {
        color: COLOR.gray.main,
    },
};

export const HeartIcon: FC<Props> = ({ direction = 'row', containerStyle }) => {
    const [isClicked, setIsClicked] = useState(false);
    const [heart, setHeart] = useState(0);

    const handleClick = () => {
        setIsClicked(!isClicked);
        setHeart(heart + (isClicked ? -1 : 1));
    };

    return (
        <Stack direction={direction} spacing={0.5} sx={style.container({ containerStyle })} onClick={handleClick}>
            {isClicked ? <FilledIcon sx={{ ...style.icon, color: COLOR.red }} /> : <EmptyIcon sx={style.icon} />}
            <Typography sx={style.text}>{heart}</Typography>
        </Stack>
    );
};
