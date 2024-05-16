import { type FC, useEffect, useState } from 'react';
import axios from 'axios';
import { AppScreen, PostList } from '@/components/organisms';

interface Post {
    id: number;
    title: string;
    price: number;
    imageUrl: string;
    wishCount: number;
    viewCount: number;
    createdAt: string;
    category: {
        id: number;
        name: string;
    };
}

interface ApiResponse {
    code: string;
    message: string;
    posts: Post[];
}

interface Props {
    main?: boolean;
    title?: string;
    pop?: boolean;
}

export const MainTemplate: FC<Props> = ({ main, title, pop }) => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const fetchPosts = () => {
            const accessToken = localStorage.getItem('accessToken');

            axios
                .get<ApiResponse>('https://api.inused.store/api/v1/posts', {
                    headers: {
                        Authorization: accessToken,
                    },
                })
                .then((response) => {
                    setPosts(response.data.posts);
                })
                .catch(() => {});
        };

        fetchPosts();
    }, []);

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
