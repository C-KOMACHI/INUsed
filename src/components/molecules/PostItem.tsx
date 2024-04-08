import type { FC } from 'react';
import { Grid, Stack, Divider, Box } from '@mui/material';
import { MoreVert as MenuIcon } from '@mui/icons-material';
import { Image, Text, HeartIcon } from '@/components/atoms';
import { COLOR } from '@/constants';
import { useFlow } from '@/stackflow';

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
    const { push } = useFlow();

    const handleClick = () => {
        push('Post', {
            title,
        });
    };

    return (
        <Box sx={{ pt: '5px' }}>
            <Stack spacing={2}>
                {main && (
                    <>
                        <Grid container spacing={2}>
                            <Grid item xs={4} onClick={handleClick}>
                                <Image src={src} alt={title} />
                            </Grid>
                            <Grid item xs={6} onClick={handleClick}>
                                <Text type="h6">{title}</Text>
                                <Text type="subtitle2">{subTitle1}</Text>
                                <Text type="subtitle1">{subTitle2}</Text>
                            </Grid>
                            <Grid item xs={2} sx={{ position: 'relative' }}>
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
                                <Text type="h6">{title}</Text>
                                <Text type="subtitle1">{subTitle1}</Text>
                                <MenuIcon sx={{ ...style, right: 20, top: 5 }} />
                            </Box>
                            <Text type="body1">{body}</Text>
                        </Stack>
                    </>
                )}
            </Stack>
        </Box>
    );
};
