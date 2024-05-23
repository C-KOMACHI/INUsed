import { type FC, useRef, useState } from 'react';
import { Box, Stack } from '@mui/material';
import { Input, Icon, ChatBubble } from '@/components/atoms';
import { COLOR } from '@/constants';

const style = {
    container: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
        left: 0,
        height: '80px',
        minHeight: '80px',
        overflow: 'hidden',
        zIndex: 1,
        alignItems: 'center',
        background: `${COLOR.blue.main}`,
    },
};

export const ChatBar: FC = () => {
    const chatRef = useRef<HTMLInputElement>(null);
    const [bubbles, setBubbles] = useState<{ id: number; message: string }[]>([]);
    const [clickCount, setClickCount] = useState<number>(0);

    const handleSendClick = () => {
        if (chatRef.current && chatRef.current.value.trim() !== '') {
            const newBubble = {
                id: Date.now(), // 새로운 ID 생성
                message: chatRef.current.value,
            };
            chatRef.current.value = '';

            // 사용자가 보낸 메시지를 추가
            setBubbles((prevBubbles) => [...prevBubbles, newBubble]);

            // 5초 후에 새로운 시스템 메시지를 추가
            setTimeout(() => {
                let message = '';
                if (clickCount % 3 === 0) {
                    message = '가능합니다';
                } else if (clickCount % 3 === 1) {
                    message = '도서관 앞에서 봬요';
                } else {
                    message = '가능합니다';
                }
                setBubbles((prevBubbles) => [...prevBubbles, { id: Date.now(), message }]);
            }, 5000);

            // 클릭 횟수 증가
            setClickCount((prevCount) => prevCount + 1);
        }
    };

    return (
        <>
            <Box sx={style.container}>
                <Stack direction="row" alignItems="center" spacing={3} sx={{ pt: 1.8, pl: 2, pr: 2 }}>
                    <Input disabledBorderRadius disabledBorder bigFont ref={chatRef} />
                    <Icon gray src="/icons/Send.png" onClick={handleSendClick} />
                </Stack>
            </Box>
            <Box sx={{ padding: '10px' }}>
                {bubbles.map((bubble) => (
                    <ChatBubble key={bubble.id} text={bubble.message} myChat={bubble.id % 2 === 0} />
                ))}
            </Box>
        </>
    );
};
