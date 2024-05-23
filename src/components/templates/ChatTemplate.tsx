import type { FC } from 'react';
import { ChatBubble } from '@/components/atoms';
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
            <PostItem src={src} title={title} price={price} main />

            <ChatBubble text="팔렸나요?" myChat />
            <ChatBar />
        </AppScreen>
    );
};
