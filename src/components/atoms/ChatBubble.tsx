import type { FC } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { COLOR } from '@/constants';

interface Prop {
    myChat?: boolean;
    text?: string;
}

const style = {
    bubbleContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    bubble: {
        padding: '10px 10px',
        minWidth: '150px',
        maxWidth: '160px',
        borderRadius: '10px',
        marginBottom: '20px',
    },
};

export const ChatBubble: FC<Prop> = ({ myChat, text }) => {
    return (
        <Stack direction="row" sx={{ justifyContent: myChat ? 'flex-end' : 'flex-start', marginBottom: '10px' }}>
            {myChat && (
                <Typography
                    sx={{
                        alignSelf: 'flex-end',
                        marginRight: '5px',
                        marginBottom: '18px',
                        color: 'gray',
                        fontSize: '13px',
                    }}
                >
                    22:14
                </Typography>
            )}
            <Box
                sx={{
                    ...style.bubble,
                    background: myChat ? COLOR.blue.hover : COLOR.gray.temp,
                }}
            >
                <Typography sx={{ textAlign: 'center' }}>{text}</Typography>
            </Box>
            {!myChat && (
                <Typography
                    sx={{
                        alignSelf: 'flex-end',
                        marginLeft: '5px',
                        marginBottom: '18px',
                        color: 'gray',
                        fontSize: '13px',
                    }}
                >
                    22:14
                </Typography>
            )}
        </Stack>
    );
};
