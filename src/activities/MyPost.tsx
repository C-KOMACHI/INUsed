import type { ActivityComponentType } from '@stackflow/react';
import { useEffect, useState, Suspense } from 'react';
import axios from 'axios';
import { MainTemplate } from '@/components/templates';

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
    checkMyPost: boolean;
};

interface ApiResponse {
    code: string;
    message: string;
    posts: Post[];
}

export const MyPost: ActivityComponentType = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const fetchPosts = () => {
            const accessToken = localStorage.getItem('accessToken');

            axios
                .get<ApiResponse>('https://api.inused.store/api/v1/posts/my-post', {
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
        <Suspense>
            <MainTemplate title="내 게시물" pop posts={posts} />
        </Suspense>
    );
};
