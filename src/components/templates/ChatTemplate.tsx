import type { FC } from 'react';
import { Typography, Box } from '@mui/material';
import { ChatBar, PostItem } from '@/components/molecules';
import { AppScreen } from '@/components/organisms';

interface Prop {
    nickname: string;
    src?: string;
    title?: string;
    price?: number;
}

export const ChatTemplate: FC<Prop> = ({ nickname, src, title, price }) => {
    return (
        <AppScreen backIcon header title={nickname}>
            <Box sx={{ overflowY: 'auto', minHeight: '30vh', maxHeight: '30vh', height: '30vh' }}>
                <PostItem src={src} title={title} price={price} main />
                <Typography sx={{ color: 'gray', textAlign: 'center', marginTop: '10px', marginBottom: '20px' }}>
                    2024.05.23
                </Typography>
            </Box>

            <ChatBar />
        </AppScreen>
    );
};
