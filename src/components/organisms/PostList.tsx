import type { FC } from 'react';
import { Stack } from '@mui/material';
import { PostItem } from '@/components/molecules';

export interface Post {
    id: number;
    imageUrl?: string;
    title?: string;
    price?: number;
    createdAt?: string;
    ago?: string;
    wishCount?: number;
    checkLiked?: boolean;
    content?: string;
    checkMyPost?: boolean;
    keyword?: string;
}

interface Props {
    posts: Post[];
}

export const PostList: FC<Props> = ({ posts }) => {
    return (
        <Stack sx={{ pl: '10px' }}>
            {posts.map(
                ({
                    id,
                    imageUrl,
                    title,
                    price,
                    ago,
                    createdAt,
                    wishCount,
                    checkLiked,
                    content,
                    keyword,
                    checkMyPost,
                }) => {
                    return (
                        <PostItem
                            id={id}
                            src={imageUrl}
                            title={title}
                            ago={ago}
                            createdAt={createdAt}
                            price={price}
                            main={!!price}
                            notice={!price}
                            wishCount={wishCount}
                            checkLiked={checkLiked}
                            content={content}
                            alarm={!!keyword}
                            keyword={keyword}
                            heart={!!price && !keyword}
                            checkMyPost={checkMyPost}
                        />
                    );
                },
            )}
        </Stack>
    );
};
