import type { ActivityComponentType } from '@stackflow/react';
import { Suspense } from 'react';
import { ReportTemplate } from '@/components/templates';

export const Report: ActivityComponentType = () => {
    return (
        <Suspense>
            <ReportTemplate />
        </Suspense>
    );
};
