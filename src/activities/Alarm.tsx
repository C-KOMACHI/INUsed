import type { ActivityComponentType } from '@stackflow/react';
import { useEffect, useState, Suspense } from 'react';
import { axios } from '@/utils';
import { AlarmTemplate } from '@/components/templates';

interface Post {
    id: number;
    title: string;
    imageUrl: string;
    ago: string;
    keyword: string;
    price: number;
}
interface KeywordGetPostResponse {
    posts: Post[];
}

export const Alarm: ActivityComponentType = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const fetchPosts = () => {
            const accessToken = localStorage.getItem('accessToken');

            axios
                .get<KeywordGetPostResponse>('/api/v1/keyword/get-post', {
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
            <AlarmTemplate posts={posts} />
        </Suspense>
    );
};
