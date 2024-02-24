import type { FC } from 'react';
import { AppScreen } from '@/components/organisms';
import { PostItem } from '@/components/molecules';
import { PostBottomMenubar } from '@/components/molecules';

export const PostTemplate: FC = () => {
    return (
        <AppScreen>
            <PostItem src="/image.jpg" title="양말1" subTitle1="2일 전" body="이제 갓벗은 따끈따끈한" post />
            <PostBottomMenubar subTitle2="5,000원" />
        </AppScreen>
    );
};
