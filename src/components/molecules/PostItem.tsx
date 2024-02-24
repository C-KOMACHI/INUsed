import type { FC } from 'react';
import { Grid, Stack, Divider, Box } from '@mui/material';
import { MoreVert as MenuIcon } from '@mui/icons-material';
import { Image, Text, HeartIcon } from '@/components/atoms';
import { COLOR } from '@/constants';

interface Props {
    src: string;
    title: string;
    subTitle1: string;
    subTitle2?: string;
    body?: string;
    post?: boolean;
    main?: boolean;
}

const style = {
    position: 'absolute',
    right: 35,
    top: 20,
    color: COLOR.gray.main,
    cursor: 'pointer',
};

export const PostItem: FC<Props> = ({ src, title, subTitle1, subTitle2, body, post, main }) => {
    return (
        <Stack spacing={2}>
            {main && (
                <>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Image src={src} alt={title} />
                        </Grid>
                        <Grid item xs={8} sx={{ position: 'relative' }}>
                            <Text type="title1">{title}</Text>
                            <Text type="subtitle1">{subTitle1}</Text>
                            <Text type="subtitle2">{subTitle2}</Text>
                            <MenuIcon sx={style} />
                            <HeartIcon />
                        </Grid>
                    </Grid>
                    <Divider />
                </>
            )}
            {post && (
                <>
                    <Image src={src} alt={title} disabledBorderRadius />
                    <Stack sx={{ pl: '20px' }}>
                        <Box sx={{ position: 'relative', pb: '15px' }}>
                            <Text type="title1">{title}</Text>
                            <Text type="subtitle1">{subTitle1}</Text>
                            <MenuIcon sx={{ ...style, right: 20, top: 5 }} />
                        </Box>
                        <Text type="body1">{body}</Text>
                    </Stack>
                </>
            )}
        </Stack>
    );
};
