import type { ActivityComponentType } from '@stackflow/react';
import { Suspense } from 'react';
import { PostTemplate } from '@/components/templates';

type ArticleParams = {
    id: number;
    wishCount?: number;
    checkLiked?: boolean;
};

export const Post: ActivityComponentType<ArticleParams> = ({ params }) => {
    return (
        <Suspense>
            <PostTemplate id={params.id} wishCount={params.wishCount} checkLiked={params.checkLiked} />
        </Suspense>
    );
};
