import type { FC } from 'react';
import { AppScreen } from '@/components/organisms';
import { ProfileInformation } from '@/components/molecules';

export const MyPageTemplate: FC = () => {
    return (
        <AppScreen center bottomNavigation>
            <ProfileInformation
                alt="프로필 사진"
                nickName="유잼잼"
                name="진유리"
                email="jin03021425@inu.ac.kr"
                temperature={50}
            />
        </AppScreen>
    );
};
