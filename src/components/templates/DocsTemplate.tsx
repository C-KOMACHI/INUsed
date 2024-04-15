import type { FC } from 'react';
import { Text } from '@/components/atoms';
import { PostItem } from '@/components/molecules';
import { AppScreen } from '@/components/organisms';

export const DocsTemplate: FC = () => {
    return (
        <AppScreen header title="공지사항" borderRadius backIcon>
            <PostItem notice title="공지사항입니다" subTitle1="2024.04.23" />
            <Text type='medium'>대한민국 현행법 상 중고거래 금지된 물품이 있다는데요. 이번에 그것을 알아보려고 해요!</Text>
        </AppScreen>
    );
};
