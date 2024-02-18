import type { FC } from 'react';
import { Stack } from '@mui/material';
import { AppScreen } from '@/components/organisms';
import { Header } from '@/components/molecules';
import { BottomMenubar } from '@/components/atoms';

export const MainTemplate: FC = () => {
    return (
        <AppScreen>
            <Stack>
                <Header />
                <BottomMenubar />
            </Stack>
        </AppScreen>
    );
};
