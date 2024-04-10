import type { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { NotificationsNone as AlarmIcon } from '@mui/icons-material';
import { SearchBar } from '@/components/atoms';
import { COLOR } from '@/constants';

const style = {
    container: {
        backgroundColor: COLOR.blue.main,
        padding: '10px',
        position: 'sticky',
        width: 1,
        zIndex: 1,
        top: 0,
    },
    button: {
        color: COLOR.gray.main,
        margin: '0 12px',
    },
};
export const Header: FC = () => {
    return (
        <Box sx={style.container}>
            <Stack direction="row" alignItems="center" spacing={1}>
                <SearchBar />
                <AlarmIcon sx={style.button} fontSize="large" />
            </Stack>
        </Box>
    );
};
