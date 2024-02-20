import type { FC } from 'react';
import { Fab, Stack } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { AppScreen, PostList } from '@/components/organisms';
import { SearchBarHeader } from '@/components/molecules';
import { COLOR } from '@/constants';

const posts = [
    { id: 1, src: '/image.jpg', title: '양말1', subTitle: '2일 전', body: '5000원' },
    { id: 2, src: '/image.jpg', title: '양말2', subTitle: '2일 전', body: '5000원' },
    { id: 3, src: '/image.jpg', title: '양말3', subTitle: '2일 전', body: '5000원' },
    { id: 4, src: '/image.jpg', title: '양말4', subTitle: '2일 전', body: '5000원' },
    { id: 5, src: '/image.jpg', title: '양말5', subTitle: '2일 전', body: '5000원' },
    { id: 6, src: '/image.jpg', title: '양말6', subTitle: '2일 전', body: '5000원' },
];

const style = {
    fab: {
        position: 'absolute',
        right: 18,
        bottom: 25,
        boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)',
        backgroundColor: COLOR.white.main,
        border: `1px solid ${COLOR.blue.fab}`,
    },
    icon: {
        color: COLOR.blue.fab,
        fontSize: 50,
        filter: 'drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25))',
    },
};

export const MainTemplate: FC = () => {
    return (
        <AppScreen center bottomNavigation>
            <Stack sx={{ position: 'relative' }}>
                <SearchBarHeader />
                <PostList posts={posts} />
                <Fab sx={style.fab}>
                    <AddIcon sx={style.icon} />
                </Fab>
            </Stack>
        </AppScreen>
    );
};
