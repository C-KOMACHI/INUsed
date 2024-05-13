import type { ActivityComponentType } from '@stackflow/react';
import { Suspense } from 'react';
import { SuccessTemplate } from '@/components/templates';

export const SuccessRegister: ActivityComponentType = () => {
    return (
        <Suspense>
            <SuccessTemplate msg="회원가입이 완료되었습니다." />
        </Suspense>
    );
};
