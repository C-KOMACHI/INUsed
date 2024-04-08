import type { FC } from 'react';
import { Stack } from '@mui/material';
import { FormBox, AppScreen } from '@/components/organisms';
import { Footer } from '@/components/atoms';

export const LoginTemplate: FC = () => {
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
                <FormBox login />
                <Footer />
            </Stack>
        </AppScreen>
    );
};
