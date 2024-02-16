import type { FC } from 'react';
import { Stack } from '@mui/material';
import { FormBox, AppScreen } from '@/components/organisms';
import { Footer } from '@/components/atoms';

export const RegisterTemplate: FC = () => {
    return (
        <AppScreen center>
            <Stack>
                <FormBox register />
                <Footer register />
            </Stack>
        </AppScreen>
    );
};
