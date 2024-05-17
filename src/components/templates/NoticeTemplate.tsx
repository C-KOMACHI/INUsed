import type { FC } from 'react';
import { AppScreen, PostList } from '@/components/organisms';

const notices = [
    { id: 1, title: '중고거래가 금지된 품목 공지', createdAt: '2023.11.27' },
    { id: 2, title: '악성유저 처벌 공지', createdAt: '2023.11.26' },
    { id: 3, title: '1.0.0 버전 패치내역', createdAt: '2023.11.25' },
];

export const NoticeTemplate: FC = () => {
    return (
        <AppScreen backIcon header borderRadius title="공지사항">
            <PostList posts={notices} />
        </AppScreen>
    );
};
