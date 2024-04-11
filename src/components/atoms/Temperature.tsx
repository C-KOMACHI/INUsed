import { type FC, useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { ArrowDropUp as ArrowIcon } from '@mui/icons-material';
import { COLOR } from '@/constants';
import { Text } from '@/components/atoms';

interface Props {
    temperature: number;
    myProfile?: boolean;
    post?: boolean;
}

const style = {
    container: {
        backgroundColor: COLOR.gray.temp,
        width: '100%',
        height: '20px',
        borderRadius: '20px',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
    temp: {
        height: '20px',
        borderRadius: '20px',
    },
    text: {
        position: 'absolute',
        right: 10,
        bottom: 0,
    },
    arrow: {
        position: 'relative',
        width: 1,
        height: '20px',
    },
    icon: {
        position: 'absolute',
        color: COLOR.gray.main,
        right: -15,
    },
};

export const Temperature: FC<Props> = ({ temperature, post, myProfile }) => {
    const [color, setColor] = useState(COLOR.yellow.temp);

    useEffect(() => {
        if (temperature < 900) {
            setColor(COLOR.red.temp);
        } else if (temperature >= 900 && temperature < 1200) {
            setColor(COLOR.yellow.temp);
        } else if (temperature >= 1200 && temperature < 1500) {
            setColor(COLOR.green.temp);
        } else if (temperature >= 1500) {
            setColor(COLOR.blue.temp);
        }
    }, [temperature]);

    const tempWidth = temperature * (1 / 1800);

    return (
        <>
            {post && (
                <Typography variant="subtitle1" sx={{ color }}>
                    {temperature}℃
                </Typography>
            )}
            {myProfile && (
                <Stack>
                    <Stack direction="row" sx={{ position: 'relative' }}>
                        <Text type="medium">횃불온도</Text>
                        <Typography variant="subtitle1" sx={{ ...style.text, color }}>
                            {temperature}℃
                        </Typography>
                    </Stack>
                    <Stack>
                        <Box sx={style.container}>
                            <Box sx={{ ...style.temp, width: tempWidth, backgroundColor: color }} />
                        </Box>
                        <Box sx={{ ...style.arrow, width: tempWidth }}>
                            <ArrowIcon sx={style.icon} fontSize="large" />
                        </Box>
                    </Stack>
                </Stack>
            )}
        </>
    );
};
