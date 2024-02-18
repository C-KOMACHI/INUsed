import type { FC } from 'react';
import { useActivity } from '@stackflow/react';
import { Box, BottomNavigation as MuiBottomNavigation, BottomNavigationAction } from '@mui/material';
import {
    Home as HomeIcon,
    Dashboard as CategoryIcon,
    Favorite as FavoriteIcon,
    QuestionAnswer as ChatIcon,
    Person as PersonIcon,
} from '@mui/icons-material';
import { COLOR } from '@/constants';
import { useFlow } from '@/stackflow';

const style = {
    container: {
        position: 'fixed',
        bottom: '0',
        width: '100%',
        maxWidth: '767px',
        overflowX: 'hidden',
    },

    button: {
        color: COLOR.gray.main,
    },
};

export const BottomMenubar: FC = () => {
    const activity = useActivity();
    const { replace } = useFlow();

    return (
        <Box sx={style.container}>
            <MuiBottomNavigation
                showLabels
                value={activity.name === 'Main' ? 0 : 1}
                onChange={(_, newValue: number) => {
                    if (newValue === 0) {
                        replace('Main', {}, { animate: false });
                    }
                }}
                sx={{
                    background: COLOR.blue.menubar,
                }}
            >
                <BottomNavigationAction label="홈" icon={<HomeIcon />} sx={style.button} />
                <BottomNavigationAction label="카테고리" icon={<CategoryIcon />} sx={style.button} />
                <BottomNavigationAction label="관심" icon={<FavoriteIcon />} sx={style.button} />
                <BottomNavigationAction label="채팅" icon={<ChatIcon />} sx={style.button} />
                <BottomNavigationAction label="내 프로필" icon={<PersonIcon />} sx={style.button} />
            </MuiBottomNavigation>
        </Box>
    );
};
