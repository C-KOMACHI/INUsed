import type { ActivityComponentType } from '@stackflow/react';
import { Suspense } from 'react';
import { RegisterTemplate } from '@/components/templates';

export const FindPassword: ActivityComponentType = () => {
    return (
        <Suspense>
            <RegisterTemplate />
        </Suspense>
    );
};
