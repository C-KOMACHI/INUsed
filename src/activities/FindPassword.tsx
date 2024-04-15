import type { ActivityComponentType } from '@stackflow/react';
import { Suspense } from 'react';
import { StartTemplate } from '@/components/templates';

export const FindPassword: ActivityComponentType = () => {
    return (
        <Suspense>
            <StartTemplate findPassword/>
        </Suspense>
    );
};
