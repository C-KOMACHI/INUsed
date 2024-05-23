import { type FC } from 'react';
import { AppScreen, PostList } from '@/components/organisms';

type Post = {
    id: number;
    title: string;
    price: number;
    imageUrl: string;
    wishCount: number;
    viewCount: number;
    createdAt: string;
    ago: string;
    category: {
        id: number;
        name: string;
    };
    checkLiked: boolean;
};
interface Props {
    main?: boolean;
    title?: string;
    pop?: boolean;
    posts: Post[];
}

export const MainTemplate: FC<Props> = ({ main, title, pop, posts }) => {
    return (
        <AppScreen
            bottomNavigation={!pop}
            writeButton={main}
            searchBar={main}
            borderRadius
            header={!main}
            title={title}
            backIcon={pop}
        >
            <PostList posts={posts} />
        </AppScreen>
    );
};
