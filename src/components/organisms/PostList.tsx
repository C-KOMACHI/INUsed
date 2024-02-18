import type { FC } from 'react';
import { Stack } from '@mui/material';
import { PostItem } from '@/components/molecules';

export interface Post {
    id: number;
    src: string;
    title: string;
    subTitle?: string;
    body?: string;
}

interface Props {
    posts: Post[];
}

export const PostList: FC<Props> = ({ posts }) => {
    return (
        <Stack spacing={2}>
            {posts.map(({ id, src, title, subTitle, body }) => {
                return <PostItem key={id} src={src} title={title} subTitle={subTitle} body={body} />;
            })}
        </Stack>
    );
};
