import type { ActivityComponentType } from '@stackflow/react';
import { Suspense } from 'react';
import { BottomMenubar } from '@/components/atoms';

export const Main: ActivityComponentType = () => {
    return (
        <Suspense>
            <BottomMenubar />
        </Suspense>
    );
};
