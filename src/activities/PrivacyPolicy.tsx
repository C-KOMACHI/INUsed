import type { ActivityComponentType } from '@stackflow/react';
import { Suspense } from 'react';
import { DocsTemplate } from '@/components/templates';

export const PrivacyPolicy: ActivityComponentType = () => {
    return (
        <Suspense>
            <DocsTemplate
                header="개인정보 처리방침"
                content="응애응애응애응애응애으 ㅇ앵으애응으애응애ㅡㅇㅇ앵응애응애응애응애응애응애으 ㅇ앵으애응으애응애ㅡㅇㅇ앵응애"
            />
        </Suspense>
    );
};
