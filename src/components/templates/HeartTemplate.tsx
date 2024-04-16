import type { FC } from 'react';
import { PostList, AppScreen } from '@/components/organisms';

const posts = [
    { id: 1, src: '/image.jpg', title: '양말1', subTitle1: '5000원', subTitle2: '2일 전' },
    { id: 2, src: '/image.jpg', title: '양말2', subTitle1: '5000원', subTitle2: '2일 전' },
    { id: 3, src: '/image.jpg', title: '양말3', subTitle1: '5000원', subTitle2: '2일 전' },
];

export const HeartTemplate: FC = () => {
    return (
        <AppScreen header title="관심" borderRadius bottomNavigation>
            <PostList posts={posts} />
        </AppScreen>
    );
};
