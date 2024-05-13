import type { FC } from 'react';
import { Box, Button, Divider } from '@mui/material';
import { COLOR } from '@/constants';
import { HeartIcon, Text } from '@/components/atoms';

interface Props {
    subTitle2: string;
}

const style = {
    container: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
        left: 0,
        height: '66px',
        overflow: 'hidden',
        zIndex: 1,
        minHeight: '66px',
        display: 'flex',
        alignItems: 'center',
        borderTop: '1px solid rgba(0, 0, 0, 0.12)',
    },
    button: {
        background: COLOR.blue.fab,
        fontFamily: 'Jua',
        borderRadius: '15px',
        right: 10,
        position: 'fixed',
        fontSize: '1.1rem',
    },
};

export const PostBottomMenubar: FC<Props> = ({ subTitle2 }) => {
    return (
        <Box sx={style.container}>
            <HeartIcon
                direction="column"
                spacing="0"
                containerStyle={{ left: '1.3rem', top: '13px' }}
                textStyle={{ position: 'static', paddingLeft: '6.6px' }}
            />
            <Divider orientation="vertical" sx={{ marginLeft: '3.9rem', marginRight: '1.5rem', height: '40px' }} />
            <Text type="large">{subTitle2}</Text>

            <Button size="medium" variant="contained" sx={style.button}>
                채팅하기
            </Button>
        </Box>
    );
};
