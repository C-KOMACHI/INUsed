import type { FC } from 'react';
import { Grid, Stack, Divider } from '@mui/material';
import { Image, Text } from '@/components/atoms';
import { HeartIcon } from '@/components/atoms';

interface Props {
    src: string;
    title: string;
    subTitle?: string;
    body?: string;
}

export const PostItem: FC<Props> = ({ src, title, subTitle, body }) => {
    return (
        <Stack spacing={2}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Image src={src} alt={title} />
                </Grid>
                <Grid item xs={8} sx={{ position: 'relative' }}>
                    <Text type="title">{title}</Text>
                    {subTitle && <Text type="subtitle">{subTitle}</Text>}
                    {body && <Text type="body">{body}</Text>}
                    <HeartIcon />
                </Grid>
            </Grid>
            <Divider />
        </Stack>
    );
};
