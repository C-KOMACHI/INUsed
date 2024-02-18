import type { FC } from 'react';
import { Container } from '@mui/material';
import { AppScreen as StackFlowAppScreen, type AppScreenProps } from '@stackflow/plugin-basic-ui';
import { COLOR } from '@/constants';

interface Props extends AppScreenProps {
    title?: string;
    center?: boolean;
    login?: boolean;
}

export const AppScreen: FC<Props> = ({ children, title, center, login }) => {
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
                    ...(center && {
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        height: '100%',
                        overflowX: 'hidden',
                        maxWidth: '767px',
                    }),
                    ...(login && {
                        background: COLOR.blue.main,
                    }),
                }}
                component="main"
            >
                {children}
            </Container>
        </StackFlowAppScreen>
    );
};
