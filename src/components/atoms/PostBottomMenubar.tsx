import type { FC } from 'react';
import { Box } from '@mui/material';
import { COLOR } from '@/constants';
import { HeartIcon, Text } from '@/components/atoms';

interface Props {
    subTitle2: string;
}

const style = {
    container: {
        width: '100%',
        position: 'sticky',
        bottom: 0,
        height: '60px',
        background: COLOR.blue.main,
        overflowX: 'hidden',
        zIndex: 1,
        minHeight: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
};

export const PostBottomMenubar: FC<Props> = ({ subTitle2 }) => {
    return (
        <Box sx={style.container}>
            <HeartIcon
                direction="column"
                spacing="0"
                containerStyle={{ left: '15px', top: '7px' }}
                textStyle={{ position: 'static', paddingLeft: '6.5px' }}
            />
            <Text type="subtitle2">{subTitle2}</Text>
        </Box>
    );
};
