import type { FC } from 'react';
import { AppScreen, PostList } from '@/components/organisms';

const posts = [
    { id: 1, src: '/image.jpg', title: '양말1', subTitle1: '2일 전', subTitle2: '5000원' },
    { id: 2, src: '/image.jpg', title: '양말2', subTitle1: '2일 전', subTitle2: '5000원' },
    { id: 3, src: '/image.jpg', title: '양말3', subTitle1: '2일 전', subTitle2: '5000원' },
    { id: 4, src: '/image.jpg', title: '양말4', subTitle1: '2일 전', subTitle2: '5000원' },
    { id: 5, src: '/image.jpg', title: '양말5', subTitle1: '2일 전', subTitle2: '5000원' },
    { id: 6, src: '/image.jpg', title: '양말6', subTitle1: '2일 전', subTitle2: '5000원' },
    { id: 7, src: '/image.jpg', title: '양말4', subTitle1: '2일 전', subTitle2: '5000원' },
    { id: 8, src: '/image.jpg', title: '양말5', subTitle1: '2일 전', subTitle2: '5000원' },
    { id: 9, src: '/image.jpg', title: '양말6', subTitle1: '2일 전', subTitle2: '5000원' },
];

export const MainTemplate: FC = () => {
    return (
        <AppScreen bottomNavigation writeButton searchBar borderRadius>
            <PostList posts={posts} />
        </AppScreen>
    );
};
