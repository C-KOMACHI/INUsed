import type { FC } from 'react';
import { Container, Stack } from '@mui/material';
import { AppScreen as StackFlowAppScreen, type AppScreenProps } from '@stackflow/plugin-basic-ui';
import { BottomMenubar } from './BottomMenubar';
import { AppBar } from './AppBar';

const style = {
    container: {
        minHeight: 'calc(100vh - 101px)',
        padding: 0,
    },
    wrapper: {
        display: 'flex',
    },
};

interface Props extends AppScreenProps {
    bottomNavigation?: boolean;
    header?: boolean;
    title?: string;
}

export const AppScreen: FC<Props> = ({ children, bottomNavigation, header, title }) => {
    return (
        <StackFlowAppScreen>
            {header && <AppBar title={title} />}
            <Stack sx={style.wrapper}>
                <Container component="main" sx={style.container}>
                    {children}
                </Container>
                {bottomNavigation && <BottomMenubar />}
            </Stack>
        </StackFlowAppScreen>
    );
};
