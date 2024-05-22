import type { FC } from 'react';
import { AppScreen, PostList } from '@/components/organisms';

type Notice = {
    id: number;
    title: string;
    createdAt: string;
    content: string;
}

interface Props {
    notices: Notice[];
}

export const NoticeTemplate: FC<Props> = ({ notices }) => {
    return (
        <AppScreen backIcon header borderRadius title="공지사항">
            <PostList posts={notices} />
        </AppScreen>
    );
};
