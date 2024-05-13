import type { ActivityComponentType } from '@stackflow/react';
import { Suspense } from 'react';
import { DocsTemplate } from '@/components/templates';

export const NoticeSub: ActivityComponentType = () => {
    return (
        <Suspense>
            <DocsTemplate header="공지사항" title="슈퍼긴급공지" subTitle1="2024.05.10" text="졸작 마감이 코앞이라는 소식입니다!!!"/>
        </Suspense>
    );
};
