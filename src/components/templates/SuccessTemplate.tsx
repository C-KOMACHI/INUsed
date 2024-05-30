import type { FC } from 'react';
import { useFlow } from '@/stackflow';
import { Text, Button } from '@/components/atoms';
import { AppScreen } from '@/components/organisms';

interface Props {
    msg: string;
}

export const SuccessTemplate: FC<Props> = ({ msg }) => {
    const { replace } = useFlow();

    return (
        <AppScreen header>
            <Text type="medium">{msg}</Text>
            <Button onClick={() => replace('Login', {}, { animate: false })}>확인</Button>
        </AppScreen>
    );
};
