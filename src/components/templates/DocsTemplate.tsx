import type { FC } from 'react';
import { Text } from '@/components/atoms';
import { PostItem } from '@/components/molecules';
import { AppScreen } from '@/components/organisms';

interface Props {
    header?: string;
    title?: string;
    createdAt?: string;
    text: string;
}

export const DocsTemplate: FC<Props> = ({ header, title, createdAt, text }) => {
    return (
        <AppScreen header title={header} borderRadius backIcon>
            {title && <PostItem notice title={title} createdAt={createdAt} />}
            <Text type="medium">{text}</Text>
        </AppScreen>
    );
};
