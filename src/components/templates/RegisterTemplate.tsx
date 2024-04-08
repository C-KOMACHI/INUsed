import type { FC } from 'react';
import { Stack } from '@mui/material';
import { FormBox, AppScreen } from '@/components/organisms';

export const RegisterTemplate: FC = () => {
    return (
        <AppScreen>
            <Stack
                spacing={1}
                sx={{
                    height: '100%',
                    alignItems: 'center',
                    pt: 15,
                }}
            >
                <FormBox register />
            </Stack>
        </AppScreen>
    );
};
