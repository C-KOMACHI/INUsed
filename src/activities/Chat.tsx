import type { ActivityComponentType } from '@stackflow/react';
import { Suspense } from 'react';
import { ChatTemplate } from '@/components/templates';

interface Prop {
    src?: string;
    title?: string;
    price?: number;
}
export const Chat: ActivityComponentType<Prop> = () => {
    return (
        <Suspense>
            <ChatTemplate nickname="라미르뮨" src="image.png" title="에어포스 팝니다" price={150000} />
        </Suspense>
    );
};
