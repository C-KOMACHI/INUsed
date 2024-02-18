import type { FC } from 'react';
import { Stack, Box, Divider } from '@mui/material';
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
    padding: '1.8rem 0 0.9rem 0',
    maxWidth: '767px',
    height: '50vh',
    overflowX: 'hidden',
    background: COLOR.white.main,
};

export const PostList: FC<Props> = ({ posts }) => {
    return (
        <Box sx={style}>
            <Stack spacing={1}>
                {posts.map(({ id, src, title, subTitle, body }) => {
                    return (
                        <Stack spacing={3} key={id}>
                            <PostItem src={src} title={title} subTitle={subTitle} body={body} />
                            <Divider />
                        </Stack>
                    );
                })}
            </Stack>
        </Box>
    );
};
