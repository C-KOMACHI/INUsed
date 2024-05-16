import type { FC } from 'react';
import { Stack } from '@mui/material';
import { PostItem } from '@/components/molecules';

export interface Post {
    id: number;
    imageUrl?: string;
    title?: string;
    price?: number;
    createdAt?: string;
}

interface Props {
    posts: Post[];
}

export const PostList: FC<Props> = ({ posts }) => {
    return (
        <Stack sx={{ pl: '10px' }}>
            {posts.map(({ id, imageUrl, title, price, createdAt }) => {
                return (
                    <PostItem
                        key={id}
                        src={imageUrl}
                        title={title}
                        createdAt={createdAt}
                        price={price}
                        main={!!price}
                        notice={!price}
                    />
                );
            })}
        </Stack>
    );
};
