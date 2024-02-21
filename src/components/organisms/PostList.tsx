import type { FC } from 'react';
import { Box } from '@mui/material';
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
    height: '77.9vh',
    overflowX: 'hidden',
    background: COLOR.white.main,
    paddingTop: '10px',
    '@media (max-width: 600px)': {
        height: '82vh',
    },
};

export const PostList: FC<Props> = ({ posts }) => {
    return (
        <Box sx={style}>
            {posts.map(({ id, src, title, subTitle, body }) => {
                return <PostItem key={id} src={src} title={title} subTitle={subTitle} body={body} />;
            })}
        </Box>
    );
};
