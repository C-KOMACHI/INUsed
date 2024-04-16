import type { ActivityComponentType } from '@stackflow/react';
import { Suspense } from 'react';
import { HeartTemplate } from '@/components/templates';

export const Heart: ActivityComponentType = () => {
    return (
        <Suspense>
            <HeartTemplate/>
        </Suspense>
    );
};
