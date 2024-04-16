import type { ActivityComponentType } from '@stackflow/react';
import { Suspense } from 'react';
import { FormTemplate } from '@/components/templates';

export const Inquiry: ActivityComponentType = () => {
    return (
        <Suspense>
            <FormTemplate inquiry />
        </Suspense>
    );
};