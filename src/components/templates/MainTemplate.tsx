import type { FC } from 'react';
import { AppScreen } from '@/components/organisms';
import { Header } from '@/components/molecules';
import { BottomMenubar } from '@/components/atoms';

export const MainTemplate: FC = () => {
    return (
        <AppScreen center>
            <Header />
            <BottomMenubar />
        </AppScreen>
    );
};
