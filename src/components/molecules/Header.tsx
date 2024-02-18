import type { FC } from 'react';
import { Box } from '@mui/material';
import { Input } from '@/components/atoms';
import { COLOR } from '@/constants';

const style = {
    container: {
        width: '100%',
        height: '70px',
        position: 'fixed',
        display: 'flex',
        alignItems: 'center',
        padding: '0 0 0 2rem',
        background: COLOR.blue.main,
    },
};

export const Header: FC = () => {
    return (
        <Box sx={style.container}>
            <Input search small placeholder="물품을 검색해보세요" />
        </Box>
    );
};
