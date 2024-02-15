import type { FC } from 'react';
import { Stack } from '@mui/material';
import { FormBox, AppScreen } from '@/components/organisms';
import { Footer } from '@/components/atoms';

const LoginTemplateBlock = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    top: 0;
    right: 0;
    background: ${COLOR.blue.main};
    overflow: scroll;
    display: flex;
    justify-content: center;
    align-items: center;
`;
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
