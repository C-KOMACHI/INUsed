import type { ActivityComponentType } from '@stackflow/react';
import { Suspense } from 'react';
import { Input, Button } from '@/components/atoms';

export const Login: ActivityComponentType = () => {
    return (
        <Suspense>
            <Input placeholder="이메일" />
            <Input placeholder="비밀번호" />
            <Button>로그인</Button>
        </Suspense>
    );
};
