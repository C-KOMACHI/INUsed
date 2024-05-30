import type { ActivityComponentType } from '@stackflow/react';
import { Suspense } from 'react';
import { StartTemplate } from '@/components/templates';

export const Login: ActivityComponentType = () => {
    return (
        <Suspense>
            <StartTemplate login />
        </Suspense>
    );
};
