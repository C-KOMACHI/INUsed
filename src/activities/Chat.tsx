import type { ActivityComponentType } from '@stackflow/react';
import { Suspense } from 'react';
import { ChatTemplate } from '@/components/templates';

export const Chat: ActivityComponentType = () => {
    return (
        <Suspense>
            <ChatTemplate />
        </Suspense>
    );
};
