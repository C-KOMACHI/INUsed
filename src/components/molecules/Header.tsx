import type { FC } from 'react';
import { Box } from '@mui/material';
import { NotificationsNone as AlarmIcon } from '@mui/icons-material';
import { Input } from '@/components/atoms';
import { COLOR } from '@/constants';

const style = {
    container: {
        width: '100%',
        position: 'fixed',
        display: 'flex',
        alignItems: 'center',
        top: '0',
        justifyContent: 'center',
    },
    button: {
        color: COLOR.gray.main,
    },
};

export const Header: FC = () => {
    return (
        <Box sx={style.container} gap="5rem">
            <Input search placeholder="물품을 검색해보세요" />
            <AlarmIcon sx={style.button} fontSize="large" />
        </Box>
    );
};
