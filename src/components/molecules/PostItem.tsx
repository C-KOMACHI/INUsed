import type { FC } from 'react';
import { Grid, Stack, Divider, Box } from '@mui/material';
import { MoreVert as MenuIcon } from '@mui/icons-material';
import { Image, Text, HeartIcon } from '@/components/atoms';
import { COLOR } from '@/constants';
import { useFlow } from '@/stackflow';

interface Props {
    src?: string;
    title: string;
    subTitle1: string;
    subTitle2?: string;
    body?: string;
    post?: boolean;
    main?: boolean;
    notice?: boolean;
}

// 스타일 객체 정의
const styles = {
    container: {
        paddingTop: '20px',
        paddingLeft: '20px',
    },
    button: {
        position: 'absolute',
        right: 13,
        top: 20,
        color: COLOR.gray.main,
        cursor: 'pointer',
    },
};

const PostItem: FC<Props> = ({ src, title, subTitle1, subTitle2, body, post, main, notice }) => {
    const { push } = useFlow();

    const handleClick = () => {
        push('Post', {
            title,
        });
    };

    return (
        <>
            {/* 메인 게시물 */}
            {main && (
                <Box sx={styles.container}>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={6} onClick={handleClick}>
                            <Stack spacing={1}>
                                <Text type="h6">{title}</Text>
                                <Text type="subtitle2">{subTitle1}</Text>
                                <Text type="subtitle1">{subTitle2}</Text>
                            </Stack>
                        </Grid>
                        <Grid item xs={2} sx={{ position: 'relative' }}>
                            <HeartIcon />
                            <MenuIcon sx={styles.button} />
                        </Grid>
                    </Grid>
                    <Divider sx={{ pt: '20px' }} />
                </Box>
            )}

            {/* 포스트 게시물 */}
            {post && (
                <Stack direction="row" spacing={2}>
                    <Image src={src} alt={title} disabledBorderRadius />
                    <Stack spacing={1}>
                        <Box sx={{ position: 'relative', pb: '15px' }}>
                            <Text type="h6">{title}</Text>
                            <Text type="subtitle1">{subTitle1}</Text>
                            <MenuIcon sx={{ ...styles.button, right: 15, top: 5 }} />
                        </Box>
                        <Text type="body1">{body}</Text>
                    </Stack>
                </Stack>
            )}

            {/* 공지사항 */}
            {notice && (
                <>
                    <Text type="h6">{title}</Text>
                    <Text type="subtitle2">{subTitle1}</Text>
                    <Divider />
                </>
            )}
        </>
    );
};

export default PostItem;
