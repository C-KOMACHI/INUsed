import type { ActivityComponentType } from '@stackflow/react';
import { Suspense } from 'react';
import { StartTemplate } from '@/components/templates';

export const Register: ActivityComponentType = () => {
    return (
        <Suspense>
            <StartTemplate register/>
        </Suspense>
    );
};
