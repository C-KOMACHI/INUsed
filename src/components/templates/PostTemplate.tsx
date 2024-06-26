import { type FC, useEffect, useState } from 'react';
import axios from 'axios';
import { AppScreen } from '@/components/organisms';
import { PostItem } from '@/components/molecules';

interface Props {
    id: number;
    wishCount?: number;
    checkLiked?: boolean;
    checkMyPost?: boolean;
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
    ago: string;
    user: {
        id: number;
        nickname: string;
        email: string;
        profileImage: string;
        fireTemperature: number;
    };
    category: {
        id: number;
        name: string;
    };
    checkLiked: boolean;
    checkMyPost?: boolean;
};

interface ApiResponse {
    code: string;
    message: string;
    post: Post;
}

export const PostTemplate: FC<Props> = ({ id, wishCount, checkLiked, checkMyPost }) => {
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
        <AppScreen
            postImg={post?.imageUrl}
            price={post?.price}
            id={id}
            checkLiked={checkLiked}
            wishCount={wishCount}
            checkMyPost={checkMyPost}
        >
            <PostItem
                src={post?.imageUrl}
                title={post?.title}
                ago={post?.ago}
                body={post?.content}
                temperature={post?.user.fireTemperature}
                nickname={post?.user.nickname}
                email={post?.user.email}
                profileImage={post?.user.profileImage}
                kategorie={post?.category.name}
                id={post?.user.id}
                checkMyPost={checkMyPost}
                post
            />
        </AppScreen>
    );
};
