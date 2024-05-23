import type { FC } from 'react';
import { Box, Button, Divider } from '@mui/material';
import { useFlow } from '@/stackflow';
import { useChat } from '@/hooks/apis/chat-query';
import { COLOR } from '@/constants';
import { HeartIcon, Text } from '@/components/atoms';

interface Props {
    price?: number;
    id?: number;
    checkLiked?: boolean;
    wishCount?: number;
    userId?: number;
    postId?: number;
}

const style = {
    container: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
        left: 0,
        height: '66px',
        overflow: 'hidden',
        minHeight: '66px',
        display: 'flex',
        alignItems: 'center',
        borderTop: '1px solid rgba(0, 0, 0, 0.12)',
        background: 'white',
    },
    button: {
        background: COLOR.blue.fab,
        fontFamily: 'Jua',
        borderRadius: '15px',
        right: 10,
        position: 'fixed',
        fontSize: '1.1rem',
    },
};

export const PostBottomMenubar: FC<Props> = ({ price, id, checkLiked, wishCount, userId, postId }) => {
    const { push } = useFlow();
    const { mutate: chatMutate, isError: chatError } = useChat();

    const chatHandleClick = () => {
        chatMutate({ userId: userId ?? 0, postId: postId ?? 0 });

        if (!chatError) {
            push('Chat', {});
        }
    };

    return (
        <Box sx={style.container}>
            <HeartIcon
                direction="column"
                spacing="0"
                containerStyle={{ left: '1.3rem', top: '13px' }}
                textStyle={{ position: 'static', paddingLeft: '6.6px' }}
                id={id}
                checkLiked={checkLiked}
                wishCount={wishCount}
            />
            <Divider orientation="vertical" sx={{ marginLeft: '3.9rem', marginRight: '1.5rem', height: '40px' }} />
            <Text type="large">{price}원</Text>

            <Button size="medium" variant="contained" sx={style.button} onClick={chatHandleClick}>
                채팅하기
            </Button>
        </Box>
    );
};
