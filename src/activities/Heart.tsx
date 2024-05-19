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
    category: {
        id: number;
        name: string;
    };
    checkLiked: boolean;
};

interface ApiResponse {
    code: string;
    message: string;
    mainPostInfos: Post[];
}
export const Heart: ActivityComponentType = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const fetchPosts = () => {
            const accessToken = localStorage.getItem('accessToken');

            axios
                .get<ApiResponse>('https://api.inused.store/api/v1/wishes', {
                    headers: {
                        Authorization: accessToken,
                    },
                })
                .then((response) => {
                    setPosts(response.data.mainPostInfos);
                })
                .catch(() => {});
        };

        fetchPosts();
    }, []);
    return (
        <Suspense>
            <MainTemplate title="관심" posts={posts} />
        </Suspense>
    );
};
