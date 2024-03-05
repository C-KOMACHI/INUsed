import type { FC } from 'react';
import { Stack } from '@mui/material';
import { AppScreen } from '@/components/organisms';
import { Profile } from '@/components/atoms';

export const MyPageTemplate: FC = () => {
    return (
        <AppScreen center bottomNavigation>
            <Stack spacing={1}>
                <Profile alt="프로필 사진" />
            </Stack>
        </AppScreen>
    );
};
