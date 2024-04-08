import type { FC } from 'react';
import { Container, Stack } from '@mui/material';
import { AppScreen as StackFlowAppScreen, type AppScreenProps } from '@stackflow/plugin-basic-ui';
import { COLOR } from '@/constants';
import { BottomMenubar } from './BottomMenubar';

const style = {
    appBar: {
        textColor: COLOR.gray.main,
        iconColor: COLOR.gray.main,
        backgroundColor: COLOR.blue.main,
        height: '57px',
    },
    container: {
        minHeight: 'calc(100vh - 101px)',
        padding: 0,
    },
    wrapper: {
        display: 'flex',
    },
};

interface Props extends AppScreenProps {
    title?: string;
    bottomNavigation?: boolean;
}

export const AppScreen: FC<Props> = ({ title, children, bottomNavigation }) => {
    return (
        <StackFlowAppScreen appBar={title ? { ...style.appBar, title } : undefined}>
            <Stack sx={style.wrapper}>
                <Container component="main" sx={style.container}>
                    {children}
                </Container>
                {bottomNavigation && <BottomMenubar />}
            </Stack>
        </StackFlowAppScreen>
    );
};
