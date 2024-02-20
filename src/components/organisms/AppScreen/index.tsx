import type { FC } from 'react';
import { Container } from '@mui/material';
import { AppScreen as StackFlowAppScreen, type AppScreenProps } from '@stackflow/plugin-basic-ui';
import { COLOR } from '@/constants';
import { BottomMenubar } from './BottomMenubar';

interface Props extends AppScreenProps {
    title?: string;
    center?: boolean;
    main?: boolean;
    bottomNavigation?: boolean;
}

export const AppScreen: FC<Props> = ({ children, title, center, bottomNavigation }) => {
    return (
        <StackFlowAppScreen
            appBar={{
                title,
                iconColor: COLOR.gray.main,
            }}
        >
            <Container
                disableGutters
                maxWidth={false}
                sx={{
                    ...(center
                        ? {
                              alignItems: 'center',
                              justifyContent: 'center',
                              display: 'flex',
                              height: '100%',
                              background: COLOR.blue.main,
                              overflowX: 'hidden',
                              maxWidth: '767px',
                          }
                        : null),
                }}
                component="main"
            >
                {children}
                {bottomNavigation && <BottomMenubar />}
            </Container>
        </StackFlowAppScreen>
    );
};
