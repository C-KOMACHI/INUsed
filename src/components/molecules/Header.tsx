import type { FC } from 'react';
import { Box } from '@mui/material';
import { NotificationsNone as AlarmIcon } from '@mui/icons-material';
import { Input, Logo } from '@/components/atoms';
import { COLOR } from '@/constants';

const style = {
    container: {
        width: '100%',
        position: 'fixed',
        display: 'flex',
        alignItems: 'center',
        top: 0,
        justifyContent: 'center',
        height: '60px',
        maxWidth: '767px',
        padding: '0 0 0 12px',
        background: COLOR.blue.main,
        overflowX: 'hidden',
        zIndex: 1,
    },
    button: {
        color: COLOR.gray.main,
        margin: '0 12px',
    },
};

export const Header: FC = () => {
    return (
        <Box sx={style.container}>
            <Logo small src="Logo.png" alt="logo" />
            <Input search placeholder="물품을 검색해보세요" />
            <AlarmIcon sx={style.button} fontSize="large" />
        </Box>
    );
};
