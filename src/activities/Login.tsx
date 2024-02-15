import type { ActivityComponentType } from '@stackflow/react';
import { Suspense } from 'react';
import { Input, Button, Logo } from '@/components/atoms';

export const Login: ActivityComponentType = () => {
    return (
        <Suspense>
            <Logo src="Logo.png" alt="logo" />
            <Input placeholder="이메일" />
            <Input placeholder="비밀번호" />
            <Button>로그인</Button>
        </Suspense>
    );
};
