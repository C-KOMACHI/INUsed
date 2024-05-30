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

type ArticleParams = {
    text: string;
};

export const Search: ActivityComponentType<ArticleParams> = ({params}) => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const fetchPosts = () => {
            const accessToken = localStorage.getItem('accessToken');

            axios
                .get<ApiResponse>(`https://api.inused.store/api/v1/posts/search`,
                { params: { search: params.text } , headers: { Authorization: accessToken } }
                )
                .then((response) => {
                    setPosts(response.data.posts);
                })
                .catch(() => {});
        };
        fetchPosts();
    }, [params.text]);

    return (
        <Suspense>
            <MainTemplate pop posts={posts} title={`'${params.text}' 검색 결과`}/>
        </Suspense>
    );
};
