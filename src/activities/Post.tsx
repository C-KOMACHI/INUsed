import type { ActivityComponentType } from '@stackflow/react';
import { Suspense } from 'react';
import { PostTemplate } from '@/components/templates';

type ArticleParams = {
    id:number;
};

export const Post: ActivityComponentType<ArticleParams> = ({params}) => {
    return (
        <Suspense>
            <PostTemplate id={params.id}/>
        </Suspense>
    );
};
