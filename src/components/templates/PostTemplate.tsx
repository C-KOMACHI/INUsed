import type { FC } from 'react';
import { AppScreen } from '@/components/organisms';
import { PostItem, PostBottomMenubar } from '@/components/molecules';

export const PostTemplate: FC = () => {
    return (
        <AppScreen title="판매 게시물">
            <PostItem src="/image.jpg" title="양말1" subTitle1="2일 전" body="이제 갓벗은 따끈따끈한" post />
            <PostBottomMenubar subTitle2="5,000원" />
        </AppScreen>
    );
};
