import type { FC } from 'react';
import { Container } from '@mui/material';
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
};

interface Props extends AppScreenProps {
    title?: string;
    center?: boolean;
    bottomNavigation?: boolean;
}

export const AppScreen: FC<Props> = ({ title, children, center, bottomNavigation }) => {
    return (
        <StackFlowAppScreen appBar={title ? { ...style.appBar, title } : undefined}>
            <Container
                disableGutters
                maxWidth={false}
                sx={{
                    ...(center
                        ? {
                              alignItems: 'center',
                              justifyContent: 'center',
                              display: 'flex',
                              flexDirection: 'column',
                              height: '100%',
                              overflowX: 'hidden',
                              pb: '50px',
                          }
                        : { height: '100%' }),
                }}
            >
                {children}
            </Container>
            {bottomNavigation && <BottomMenubar />}
        </StackFlowAppScreen>
    );
};
