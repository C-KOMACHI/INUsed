import type { ActivityComponentType } from '@stackflow/react';
import { Suspense } from 'react';
import { DocsTemplate } from '@/components/templates';

type ArticleParams = {
    id?: number;
    title?: string;
    createdAt?: string;
    content?: string;
};

export const NoticeSub: ActivityComponentType<ArticleParams> = ({ params }) => {
    return (
        <Suspense>
            <DocsTemplate
                header="공지사항"
                title={params.title}
                createdAt={params.createdAt}
                content={params.content}
            />
        </Suspense>
    );
};
