import type { ActivityComponentType } from '@stackflow/react';
import { Suspense } from 'react';
import { MainTemplate } from '@/components/templates';

export const Heart: ActivityComponentType = () => {
    return (
        <Suspense>
            <MainTemplate title="관심" />
        </Suspense>
    );
};
