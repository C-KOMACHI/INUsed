import type { FC } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { ArrowDropUp as ArrowIcon } from '@mui/icons-material';
import { COLOR } from '@/constants';
import { Text } from '@/components/atoms';

interface Props {
    temperature: number;
}

const style = {
    container: {
        backgroundColor: COLOR.gray.temp,
        width: 1,
        height: '20px',
        borderRadius: '20px',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
    temp: {
        backgroundColor: COLOR.blue.fab,
        height: '20px',
        borderRadius: '20px',
    },
    text: {
        position: 'absolute',
        right: 10,
        bottom: -5,
        fontFamily: 'Jua',
        color: COLOR.gray.main,
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

export const Temperature: FC<Props> = ({ temperature }) => {
    const tempWidth = temperature * 0.01;
    return (
        <Stack spacing={1}>
            <Stack direction="row" sx={{ position: 'relative' }}>
                <Text type="body2">횃불온도</Text>
                <Typography variant="h6" sx={style.text}>
                    {temperature}℃
                </Typography>
            </Stack>
            <Stack spacing={0}>
                <Box sx={style.container}>
                    <Box sx={{ ...style.temp, width: tempWidth }} />
                </Box>
                <Box sx={{ ...style.arrow, width: tempWidth }}>
                    <ArrowIcon sx={style.icon} fontSize="large" />
                </Box>
            </Stack>
        </Stack>
    );
};
