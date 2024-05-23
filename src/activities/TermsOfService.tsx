import type { ActivityComponentType } from '@stackflow/react';
import { Suspense } from 'react';
import { DocsTemplate } from '@/components/templates';

export const TermsOfService: ActivityComponentType = () => {
    return (
        <Suspense>
            <DocsTemplate header="서비스 이용 약관" content="응애" />
        </Suspense>
    );
};
