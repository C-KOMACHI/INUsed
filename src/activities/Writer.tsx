import type { ActivityComponentType } from '@stackflow/react';
import { Suspense } from 'react';
import { WriterTemplate } from '@/components/templates';

export const Writer: ActivityComponentType = () => {
    return (
        <Suspense>
            <WriterTemplate />
        </Suspense>
    );
};
