import type { ActivityComponentType } from '@stackflow/react';
import { useEffect, useState, Suspense } from 'react';
import axios from 'axios';
import { MainTemplate } from '@/components/templates';

type ArticleParams = {
    id: number;
    title: string;
};

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

interface ApiResponse {
    code: string;
    message: string;
    posts: Post[];
}

export const KategorieSub: ActivityComponentType<ArticleParams> = ({ params }) => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const fetchPosts = () => {
            const accessToken = localStorage.getItem('accessToken');

            axios
                .get<ApiResponse>(`https://api.inused.store/api/v1/posts/category/${params.id}`, {
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
    }, [params.id]);

    return (
        <Suspense>
            <MainTemplate title={params.title} pop posts={posts} />
        </Suspense>
    );
};
