import type { ActivityComponentType } from '@stackflow/react';
import { Suspense } from 'react';
import { LoginTemplate } from '@/components/templates';

export const Login: ActivityComponentType = () => {
    return (
        <Suspense>
            <LoginTemplate />
        </Suspense>
    );
};
