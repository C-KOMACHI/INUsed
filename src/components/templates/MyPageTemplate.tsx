import type { FC } from 'react';
import { Stack } from '@mui/material';
import { FormBox, AppScreen } from '@/components/organisms';
import { Footer } from '@/components/atoms';

export const MyPageTemplate: FC = () => {
    return (
        <AppScreen center bottomNavigation>
            <Stack spacing={1}>
                <FormBox login />
                <Footer login />
            </Stack>
        </AppScreen>
    );
};
