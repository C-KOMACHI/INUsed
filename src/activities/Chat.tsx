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
            <ChatTemplate
                nickname="잼잼이"
                src="air_force.png"
                title="나이키 에어포스 올화이트 235 팝니다."
                price={120000}
            />
        </Suspense>
    );
};
