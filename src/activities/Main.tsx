import type { ActivityComponentType } from '@stackflow/react';
import { Suspense } from 'react';
import { MainTemplate } from '@/components/templates';

export const Main: ActivityComponentType = () => {
    return (
        <Suspense>
            <MainTemplate main/>
        </Suspense>
    );
};
