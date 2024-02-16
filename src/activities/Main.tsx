import type { ActivityComponentType } from '@stackflow/react';
import { Suspense } from 'react';
import { BottomMenubar, Input } from '@/components/atoms';

export const Main: ActivityComponentType = () => {
    return (
        <Suspense>
            <Input search />
            <BottomMenubar />
        </Suspense>
    );
};
