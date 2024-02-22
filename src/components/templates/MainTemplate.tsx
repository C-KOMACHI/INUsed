import type { FC } from 'react';
import { Stack } from '@mui/material';
import { WriteButton } from '@/components/atoms';
import { AppScreen, PostList } from '@/components/organisms';
import { SearchBarHeader } from '@/components/molecules';

const posts = [
    { id: 1, src: '/image.jpg', title: '양말1', subTitle: '2일 전', body: '5000원' },
    { id: 2, src: '/image.jpg', title: '양말2', subTitle: '2일 전', body: '5000원' },
    { id: 3, src: '/image.jpg', title: '양말3', subTitle: '2일 전', body: '5000원' },
    { id: 4, src: '/image.jpg', title: '양말4', subTitle: '2일 전', body: '5000원' },
    { id: 5, src: '/image.jpg', title: '양말5', subTitle: '2일 전', body: '5000원' },
    { id: 6, src: '/image.jpg', title: '양말6', subTitle: '2일 전', body: '5000원' },
];

export const MainTemplate: FC = () => {
    return (
        <AppScreen center bottomNavigation>
            <Stack sx={{ position: 'relative', height: '100%', width: '100%' }}>
                <SearchBarHeader />
                <PostList posts={posts} />
                <WriteButton />
            </Stack>
        </AppScreen>
    );
};
