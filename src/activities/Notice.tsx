import type { ActivityComponentType } from '@stackflow/react';
import { Suspense } from 'react';
import { NoticeTemplate } from '@/components/templates';

export const Notice: ActivityComponentType = () => {
    return (
        <Suspense>
            <NoticeTemplate />
        </Suspense>
    );
};
