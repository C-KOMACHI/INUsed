import { type FC } from 'react';
import { AppScreen, PostList } from '@/components/organisms';

interface Post {
    id: number;
    title: string;
    imageUrl: string;
    ago: string;
    keyword: string;
    price: number;
}
interface Props {
    posts: Post[];
}

export const AlarmTemplate: FC<Props> = ({ posts }) => {
    return (
        <AppScreen borderRadius header title="알림" backIcon>
            <PostList posts={posts} />
        </AppScreen>
    );
};
