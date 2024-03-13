import type { FC } from 'react';
import { Stack } from '@mui/material';
import { FormBox, AppScreen } from '@/components/organisms';

export const RegisterTemplate: FC = () => {
    return (
        <AppScreen center>
            <Stack>
                <FormBox register />
            </Stack>
        </AppScreen>
    );
};
