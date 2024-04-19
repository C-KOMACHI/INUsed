import type { FC } from 'react';
import { Stack } from '@mui/material';
import { AppScreen } from '@/components/organisms';

interface Props {
    inquiry?: boolean;
}

export const KeywordTemplate: FC<Props> = () => {
    return (
        <AppScreen header title="키워드 알림 등록" backIcon borderRadius>
            <Stack pt={2} spacing={2}>
                dmddo
            </Stack>
        </AppScreen>
    );
};
