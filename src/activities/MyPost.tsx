import type { ActivityComponentType } from '@stackflow/react';
import { Suspense } from 'react';
import { MainTemplate } from '@/components/templates';

export const MyPost: ActivityComponentType = () => {
    return (
        <Suspense>
            <MainTemplate title="내 게시물" pop />
        </Suspense>
    );
};
