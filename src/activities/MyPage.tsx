import type { ActivityComponentType } from '@stackflow/react';
import { Suspense } from 'react';
import { MyPageTemplate } from '@/components/templates';

export const MyPage: ActivityComponentType = () => {
    return (
        <Suspense>
            <MyPageTemplate />
        </Suspense>
    );
};
