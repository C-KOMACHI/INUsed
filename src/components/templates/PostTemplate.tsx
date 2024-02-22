import type { FC } from 'react';
import { AppScreen } from '@/components/organisms';
import { PostItem } from '@/components/molecules';

export const PostTemplate: FC = () => {
    return (
        <AppScreen>
            <PostItem
                src="/image.jpg"
                title="양말1"
                subTitle1="2일 전"
                subTitle2="5000원"
                body="이제 갓벗은 따끈따끈한"
                post
            />
        </AppScreen>
    );
};
