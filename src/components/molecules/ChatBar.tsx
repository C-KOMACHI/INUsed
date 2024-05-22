import type { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { Input, Icon } from '@/components/atoms';
import { COLOR } from '@/constants';

const style = {
    container: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
        left: 0,
        height: '80px',
        overflow: 'hidden',
        zIndex: 1,
        alignItems: 'center',
        background: `${COLOR.blue.main}`,
    },
};

export const ChatBar: FC = () => {
    return (
        <Box sx={style.container}>
            <Stack direction="row" alignItems="center" spacing={3} sx={{ pt: 1.8, pl: 2, pr: 2 }}>
                <Input disabledBorderRadius disabledBorder bigFont />
                <Icon gray src="/icons/Send.png" />
            </Stack>
        </Box>
    );
};
