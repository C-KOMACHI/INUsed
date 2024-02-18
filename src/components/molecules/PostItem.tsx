import type { FC } from 'react';
import { Grid, Stack, Divider } from '@mui/material';
import { FavoriteBorder as HeartIcon } from '@mui/icons-material';
import { Image, Text } from '@/components/atoms';
import { COLOR } from '@/constants';

interface Props {
    src: string;
    title: string;
    subTitle?: string;
    body?: string;
}

const style = {
    position: 'absolute',
    bottom: '0',
    right: '3rem',
    color: COLOR.gray.main,
};

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
                    <HeartIcon sx={style} />
                </Grid>
            </Grid>
            <Divider />
        </Stack>
    );
};
