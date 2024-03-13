import type { FC } from 'react';
import { Container } from '@mui/material';
import { AppScreen as StackFlowAppScreen, type AppScreenProps } from '@stackflow/plugin-basic-ui';
import { COLOR } from '@/constants';
import { BottomMenubar } from './BottomMenubar';

interface Props extends AppScreenProps {
    center?: boolean;
    bottomNavigation?: boolean;
}

export const AppScreen: FC<Props> = ({ children, center, bottomNavigation }) => {
    return (
        <StackFlowAppScreen>
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
                              background: COLOR.white.main,
                              overflowX: 'hidden',
                              pb: '50px',
                          }
                        : { height: '100%' }),
                }}
                component="main"
            >
                {children}
                {bottomNavigation && <BottomMenubar />}
            </Container>
        </StackFlowAppScreen>
    );
};
