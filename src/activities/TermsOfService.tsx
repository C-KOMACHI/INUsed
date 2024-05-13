import type { ActivityComponentType } from '@stackflow/react';
import { Suspense } from 'react';
import { DocsTemplate } from '@/components/templates';

export const TermsOfService: ActivityComponentType = () => {
    return (
        <Suspense>
            <DocsTemplate header="서비스 이용 약관" text="응애응애응애응애응애으 ㅇ앵으애응으애응애ㅡㅇㅇ앵응애응애응애응애응애응애으 ㅇ앵으애응으애응애ㅡㅇㅇ앵응애" />
        </Suspense>
    );
};
