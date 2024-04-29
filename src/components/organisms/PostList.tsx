import type { FC } from 'react';
import { Stack } from '@mui/material';
import { PostItem } from '@/components/molecules';

export interface Post {
    id: number;
    src?: string;
    title?: string;
    subTitle1?: string;
    subTitle2?: string;
}

interface Props {
    posts: Post[];
}

export const PostList: FC<Props> = ({ posts }) => {
    return (
        <Stack sx={{ pl: '10px' }}>
            {posts.map(({ id, src, title, subTitle1, subTitle2 }) => {
                return (
                    <PostItem
                        key={id}
                        src={src}
                        title={title}
                        subTitle1={subTitle1}
                        subTitle2={subTitle2}
                        main={!!subTitle2}
                        notice={!subTitle2}
                    />
                );
            })}
        </Stack>
    );
};
