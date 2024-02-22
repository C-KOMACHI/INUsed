import type { FC } from 'react';
import { Box } from '@mui/material';
import { PostItem } from '@/components/molecules';
import { COLOR } from '@/constants';

export interface Post {
    id: number;
    src: string;
    title: string;
    subTitle1: string;
    subTitle2: string;
    body?: string;
}

interface Props {
    posts: Post[];
}

const style = {
    width: '100%',
    overflowX: 'hidden',
    background: COLOR.white.main,
};

export const PostList: FC<Props> = ({ posts }) => {
    return (
        <Box sx={style}>
            {posts.map(({ id, src, title, subTitle1, subTitle2, body }) => {
                return (
                    <PostItem
                        key={id}
                        src={src}
                        title={title}
                        subTitle1={subTitle1}
                        subTitle2={subTitle2}
                        body={body}
                    />
                );
            })}
        </Box>
    );
};
