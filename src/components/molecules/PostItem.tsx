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
const style = {
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

export const PostItem: FC<Props> = ({ src, title, subTitle1, subTitle2, body, post, main, notice }) => {
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
                <Box sx={style.container}>
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
                            <MenuIcon sx={style.button} />
                        </Grid>
                    </Grid>
                    <Divider sx={{ pt: '20px' }} />
                </Box>
            )}

            {/* 포스트 게시물 */}
            {post && (
                <Stack direction="column" spacing={2}>
                    <Image src={src} alt={title} disabledBorderRadius />
                    <Stack sx={{ pl: '20px' }}>
                        <Box sx={{ position: 'relative', pb: '15px' }}>
                            <Text type="h6">{title}</Text>
                            <Text type="subtitle1">{subTitle1}</Text>
                            <MenuIcon sx={{ ...style.button, right: 20, top: 5 }} />
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
