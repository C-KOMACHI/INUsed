import type { FC } from 'react';
import { AppScreen } from '@/components/organisms';
import { Header, PostItem } from '@/components/molecules';
import { BottomMenubar } from '@/components/atoms';

export const MainTemplate: FC = () => {
    return (
        <AppScreen center>
            <Header />
            <PostItem src="image.jpg" title="양말" subTitle="1분 전" body="100원" />
            <BottomMenubar />
        </AppScreen>
    );
};
