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
    },
};

export const PostBottomMenubar: FC<Props> = ({ subTitle2 }) => {
    return (
        <Box sx={style.container}>
            <HeartIcon direction="column" />
            <Text type="subtitle2">{subTitle2}</Text>
        </Box>
    );
};
