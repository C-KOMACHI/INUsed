import type { FC } from 'react';
import { Stack, Box } from '@mui/material';
import { PostItem } from '@/components/molecules';
import { COLOR } from '@/constants';

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

const style = {
    width: '100%',
    maxWidth: '767px',
    height: '82vh',
    overflowX: 'hidden',
    background: COLOR.white.main,
};

export const PostList: FC<Props> = ({ posts }) => {
    return (
        <Box sx={style}>
            <Stack spacing={2}>
                {posts.map(({ id, src, title, subTitle, body }) => {
                    return <PostItem key={id} src={src} title={title} subTitle={subTitle} body={body} />;
                })}
            </Stack>
        </Box>
    );
};
