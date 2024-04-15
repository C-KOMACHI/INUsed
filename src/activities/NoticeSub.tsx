import type { ActivityComponentType } from '@stackflow/react';
import { Suspense } from 'react';
import { DocsTemplate } from '@/components/templates';

export const NoticeSub: ActivityComponentType = () => {
    return (
        <Suspense>
            <DocsTemplate />
        </Suspense>
    );
};
