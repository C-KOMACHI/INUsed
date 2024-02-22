import type { ActivityComponentType } from '@stackflow/react';
import { Suspense } from 'react';
import { PostTemplate } from '@/components/templates';

export const Post: ActivityComponentType = () => {
    return (
        <Suspense>
            <PostTemplate />
        </Suspense>
    );
};
