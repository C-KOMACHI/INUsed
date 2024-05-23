import type { FC } from 'react';
import { Grid, Stack, Divider, Box } from '@mui/material';
import { ArrowBackIosNewRounded as BackIcon, ChevronRight as RightIcon } from '@mui/icons-material';
import { Image, HeartIcon, MenuIcon, Text } from '@/components/atoms';
import { ProfileInformation } from '@/components/molecules';
import { COLOR } from '@/constants';
import { useFlow } from '@/stackflow';

interface Props {
    src?: string;
    title?: string;
    createdAt?: string;
    price?: number;
    body?: string;
    post?: boolean;
    main?: boolean;
    notice?: boolean;
    report?: boolean;
    wishCount?: number;
    id?: number;
    checkLiked?: boolean;
    content?: string;
    nickname?: string;
    email?: string;
    temperature?: number;
    profileImage?: string;
    ago?: string;
}

const style = {
    container: {
        paddingTop: '20px',
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

export const PostItem: FC<Props> = ({
    src,
    title,
    createdAt,
    price,
    body,
    post,
    main,
    notice,
    report,
    wishCount,
    id,
    checkLiked,
    content,
    nickname,
    email,
    temperature,
    profileImage,
    ago,
}) => {
    const { push } = useFlow();
    const { pop } = useFlow();

    const pushPost = () => {
        if (id !== undefined) {
            push('Post', { id, wishCount, checkLiked });
        }
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
                        <Grid item xs={4} onClick={pushPost}>
                            <Image src={src} alt={title} />
                        </Grid>
                        <Grid item xs={7} onClick={pushPost}>
                            <Text type="large">{title}</Text>
                            <Text type="medium">{price}원</Text>
                            <Text type="smallGray">{ago}</Text>
                        </Grid>
                        <Grid item xs={1} sx={{ position: 'relative' }}>
                            <HeartIcon wishCount={wishCount} checkLiked={checkLiked} id={id} />
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
                        <MenuIcon />
                    </Stack>

                    <Stack direction="column" spacing={2}>
                        <Image src={src} alt={title} disabledBorderRadius />
                        <Stack spacing={2}>
                            <ProfileInformation
                                src={profileImage}
                                nickName={nickname}
                                email={email}
                                temperature={temperature ?? 0}
                                post
                            />
                            <Divider />
                            <Box sx={{ position: 'relative', pb: '15px' }}>
                                <Text type="large">{title}</Text>
                                <Text type="smallGray">{ago}</Text>
                            </Box>
                            <Text type="mediumGray">{body}</Text>
                        </Stack>
                    </Stack>
                </>
            )}

            {/* 공지사항 */}
            {notice && (
                <Stack sx={{ pt: '10px', position: 'relative' }} spacing={1.5}>
                    <Box onClick={() => push('NoticeSub', { id, title, createdAt, content })}>
                        <Text type="large">{title}</Text>
                        <Text type="smallGray">{createdAt}</Text>
                    </Box>
                    <Divider />
                </Stack>
            )}

            {/* 신고 페이지 */}
            {report && (
                <Stack sx={{ position: 'relative' }} spacing={1.5}>
                    <Text type="medium">{title}</Text>
                    <RightIcon sx={{ position: 'absolute', right: 5, bottom: 16 }} />
                    <Divider />
                </Stack>
            )}
        </>
    );
};
