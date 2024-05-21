import type { FC } from 'react';
import { AppScreen } from '@/components/organisms';
import { ChatBar } from '@/components/molecules';

export const ChatTemplate: FC = () => {
    return (
        <AppScreen backIcon header title="라미르뮨">
            <ChatBar />
        </AppScreen>
    );
};
