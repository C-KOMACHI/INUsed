import type { FC } from 'react';
import { Box } from '@mui/material';
import { NotificationsNone as AlarmIcon } from '@mui/icons-material';
import { Input } from '@/components/atoms';
import { COLOR } from '@/constants';

const style = {
    container: {
        width: '100%',
        position: 'sticky',
        display: 'flex',
        alignItems: 'center',
        top: 0,
        justifyContent: 'center',
        height: '60px',
        background: COLOR.blue.menubar,
        overflowX: 'hidden',
        zIndex: 1,
        minHeight: '60px',
    },
    button: {
        color: COLOR.gray.main,
        margin: '0 12px',
    },
};

export const SearchBarHeader: FC = () => {
    return (
        <Box sx={style.container}>
            <Input search placeholder="물품을 검색해보세요" />
            <AlarmIcon sx={style.button} fontSize="large" />
        </Box>
    );
};
