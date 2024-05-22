import type { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { COLOR } from '@/constants';

interface Prop {
    myChat?: boolean;
    text?: string;
}

const style = {
    padding: '10px 10px',
    minWeight: '150px',
    maxWidth: '160px',
    borderRadius: '10px',
};

export const ChatBubble: FC<Prop> = ({ myChat, text }) => {
    return (
        <Box
            sx={{
                ...style,
                background: myChat ? COLOR.blue.hover : COLOR.gray.temp,
            }}
        >
            <Typography sx={{ minWeight: '150px', maxWidth: '160px', textAlign: 'center' }}>{text}</Typography>
        </Box>
    );
};
