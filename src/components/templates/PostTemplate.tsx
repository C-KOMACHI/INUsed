import type { FC } from 'react';
import { AppScreen } from '@/components/organisms';
import { PostItem, PostBottomMenubar } from '@/components/molecules';

export const PostTemplate: FC = () => {
    return (
        <AppScreen>
            <PostItem
                src="/image.jpg"
                title="진유리 양말 팝니다"
                createdAt="의류/끌올 25분 전"
                body="이제 갓 벗은 따끈따끈한 양말입니다.
                오늘 내로 구매시 20% 할인해드려요~"
                post
            />
            <PostBottomMenubar subTitle2="5,000원" />
        </AppScreen>
    );
};
