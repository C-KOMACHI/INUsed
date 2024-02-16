import type { FC } from 'react';
import { Stack } from '@mui/material';
import { FormBox, AppScreen } from '@/components/organisms';
import { Footer } from '@/components/atoms';

export const LoginTemplate: FC = () => {
    return (
        <AppScreen center>
            <Stack spacing={1}>
                <FormBox login />
                <Footer login />
            </Stack>
        </AppScreen>
    );
};
