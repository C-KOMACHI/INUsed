import type { FC } from 'react';
import { useActivity } from '@stackflow/react';
import { Box, BottomNavigation as MuiBottomNavigation, BottomNavigationAction } from '@mui/material';
import {
    Dashboard as CategoryIcon,
    Favorite as FavoriteIcon,
    QuestionAnswer as ChatIcon,
    Person as PersonIcon,
} from '@mui/icons-material';
import { WriteButton, Image } from '@/components/atoms';
import { COLOR } from '@/constants';
import { useFlow } from '@/stackflow';

interface Props {
    writeButton?: boolean;
}

const style = {
    container: {
        width: 1,
        position: 'sticky',
        bottom: '0',
    },

    button: {
        color: COLOR.gray.main,
        '& .MuiBottomNavigationAction-label': {
            fontSize: '0.7rem',
        },
    },
};

export const BottomMenubar: FC<Props> = ({ writeButton }) => {
    const activity = useActivity();
    const { replace } = useFlow();

    return (
        <Box sx={style.container}>
            {writeButton && <WriteButton />}
            <MuiBottomNavigation
                showLabels
                value={activity.name === 'Main' ? 0 : 4}
                onChange={(_, newValue: number) => {
                    if (newValue === 0) {
                        replace('Main', {}, { animate: false });
                    }
                    if (newValue === 4) {
                        replace('MyPage', {}, { animate: false });
                    }
                }}
                sx={{
                    background: COLOR.blue.main,
                }}
            >
                <BottomNavigationAction label="홈" icon={<Image src="/icons/Home.png"/>} sx={style.button} />
                <BottomNavigationAction label="카테고리" icon={<CategoryIcon />} sx={style.button} />
                <BottomNavigationAction label="관심" icon={<FavoriteIcon />} sx={style.button} />
                <BottomNavigationAction label="채팅" icon={<ChatIcon />} sx={style.button} />
                <BottomNavigationAction label="내프로필" icon={<PersonIcon />} sx={style.button} />
            </MuiBottomNavigation>
        </Box>
    );
};
