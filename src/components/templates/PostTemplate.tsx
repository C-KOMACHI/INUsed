import { type FC, useEffect, useState } from 'react';
import axios from 'axios';
import { AppScreen } from '@/components/organisms';
import { PostItem, PostBottomMenubar } from '@/components/molecules';

interface Props {
    id: number;
    wishCount?: number;
    checkLiked?: boolean;
}

type Post = {
    id: number;
    title: string;
    price: number;
    content: string;
    imageUrl: string;
    wishCount: number;
    viewCount: number;
    createdAt: string;
    user: {
        id: number;
        nickname: string;
        profileImage: string;
        fireTemperature: number;
    }
    category: {
        id: number;
        name: string;
    };
    checkLiked: boolean;
}

interface ApiResponse {
    code: string;
    message: string;
    post: Post;
}

export const PostTemplate: FC<Props> = ({id, wishCount, checkLiked}) => {
    const [post, setPost] = useState<Post>();

    useEffect(() => {
        const fetchPosts = () => {
            const accessToken = localStorage.getItem('accessToken');

            axios
                .get<ApiResponse>(`https://api.inused.store/api/v1/posts/${id}`, {
                    headers: {
                        Authorization: accessToken,
                    },
                })
                .then((response) => {
                    setPost(response.data.post);
                })
                .catch(() => {});
        };
        fetchPosts();
    }, [id]);
    
    return (
        <AppScreen>
            <PostItem
                src={post?.imageUrl}
                title={post?.title}
                createdAt={post?.createdAt}
                body={post?.content}
                post
            />
            <PostBottomMenubar price={post?.price} id={id} checkLiked={checkLiked} wishCount={wishCount}/>
        </AppScreen>
    );
};
