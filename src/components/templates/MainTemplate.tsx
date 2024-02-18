import type { FC } from 'react';
import { AppScreen, PostList } from '@/components/organisms';
import { Header } from '@/components/molecules';
import { BottomMenubar } from '@/components/atoms';

const posts = [
    { id: 1, src: '/image.jpg', title: '1', subTitle: '2일 전', body: '5000원' },
    { id: 2, src: '/image.jpg', title: '2', subTitle: '2일 전', body: '5000원' },
    { id: 3, src: '/image.jpg', title: '3', subTitle: '2일 전', body: '5000원' },
    { id: 4, src: '/image.jpg', title: '사과4', subTitle: '2일 전', body: '5000원' },
    { id: 5, src: '/image.jpg', title: '사과5', subTitle: '2일 전', body: '5000원' },
    { id: 6, src: '/image.jpg', title: '사과6', subTitle: '2일 전', body: '5000원' },
];

export const MainTemplate: FC = () => {
    return (
        <AppScreen center>
            <Header />
            <PostList posts={posts} />
            <BottomMenubar />
        </AppScreen>
    );
};
