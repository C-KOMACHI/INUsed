import type { FC } from 'react';
import { AppScreen, PostList } from '@/components/organisms';

const posts = [
    { id: 1, src: '/image.jpg', title: '양말1', subTitle1: '5000원', subTitle2: '2일 전' },
    { id: 2, src: '/image.jpg', title: '양말2', subTitle1: '5000원', subTitle2: '2일 전' },
    { id: 3, src: '/image.jpg', title: '양말3', subTitle1: '5000원', subTitle2: '2일 전' },
    { id: 4, src: '/image.jpg', title: '양말4', subTitle1: '5000원', subTitle2: '2일 전' },
    { id: 5, src: '/image.jpg', title: '양말5', subTitle1: '5000원', subTitle2: '2일 전' },
    { id: 6, src: '/image.jpg', title: '양말6', subTitle1: '5000원', subTitle2: '2일 전' },
    { id: 7, src: '/image.jpg', title: '양말7', subTitle1: '5000원', subTitle2: '2일 전' },
    { id: 8, src: '/image.jpg', title: '양말8', subTitle1: '5000원', subTitle2: '2일 전' },
    { id: 9, src: '/image.jpg', title: '양말9', subTitle1: '5000원', subTitle2: '2일 전' },
];

interface Props {
    main?: boolean;
    title?: string;
    pop?: boolean;
}

export const MainTemplate: FC<Props> = ({main, title, pop}) => {
    return (
        <AppScreen bottomNavigation={!pop} writeButton={main} searchBar={main} borderRadius header={!main} title={title} backIcon={pop}>
            <PostList posts={posts} />
        </AppScreen>
    );
};
