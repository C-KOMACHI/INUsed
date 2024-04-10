import type { FC } from 'react';
import { Grid, Stack, Divider, Box } from '@mui/material';
import { MoreVert as MenuIcon, ArrowBackIosNewRounded as BackIcon } from '@mui/icons-material';
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
        paddingLeft: '10px',
        zIndex: 0,
    },
    button: {
        position: 'absolute',
        top: 20,
        color: COLOR.white.main,
        cursor: 'pointer',
        fontSize: '30px',
    },
};

export const PostItem: FC<Props> = ({ src, title, subTitle1, subTitle2, body, post, main, notice }) => {
    const { push } = useFlow();
    const { pop } = useFlow();

    const pushHandleClick = () => {
        push('Post', {
            title,
        });
    };

    const popHandleClick = () => {
        pop();
    };

    return (
        <>
            {/* 메인 게시물 */}
            {main && (
                <Box sx={style.container}>
                    <Grid container spacing={2}>
                        <Grid item xs={4} onClick={pushHandleClick}>
                            <Image src={src} alt={title} />
                        </Grid>
                        <Grid item xs={6} onClick={pushHandleClick}>
                            <Text type="large">{title}</Text>
                            <Text type="medium">{subTitle1}</Text>
                            <Text type="smallGray">{subTitle2}</Text>
                        </Grid>
                        <Grid item xs={2} sx={{ position: 'relative' }}>
                            <HeartIcon />
                        </Grid>
                    </Grid>
                    <Divider sx={{ pt: '20px' }} />
                </Box>
            )}

            {/* 포스트 게시물 */}
            {post && (
                <>
                    <Stack direction="row" spacing={5}>
                        <BackIcon sx={{ ...style.button, left: 20 }} onClick={popHandleClick} />
                        <MenuIcon sx={{ ...style.button, right: 20 }} />
                    </Stack>

                    <Stack direction="column" spacing={2}>
                        <Image src={src} alt={title} disabledBorderRadius />
                        <Stack sx={{ pl: '10px' }}>
                            <Box sx={{ position: 'relative', pb: '15px' }}>
                                <Text type="large">{title}</Text>
                                <Text type="smallGray">{subTitle1}</Text>
                            </Box>
                            <Text type="mediumGray">{body}</Text>
                        </Stack>
                    </Stack>
                </>
            )}

            {/* 공지사항 */}
            {notice && (
                <>
                    <Text type="large">{title}</Text>
                    <Text type="smallGray">{subTitle1}</Text>
                    <Divider />
                </>
            )}
        </>
    );
};
