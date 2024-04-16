import type { ActivityComponentType } from '@stackflow/react';
import { Suspense } from 'react';
import { KategorieTemplate } from '@/components/templates';

export const Kategorie: ActivityComponentType = () => {
    return (
        <Suspense>
            <KategorieTemplate/>
        </Suspense>
    );
};
