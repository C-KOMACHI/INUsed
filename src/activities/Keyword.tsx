import type { ActivityComponentType } from '@stackflow/react';
import { Suspense } from 'react';
import { KeywordTemplate } from '@/components/templates';

export const Keyword: ActivityComponentType = () => {
    return (
        <Suspense>
            <KeywordTemplate />
        </Suspense>
    );
};
