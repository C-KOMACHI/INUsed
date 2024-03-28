import type { FC } from 'react';
import { Container } from '@mui/material';
import { AppScreen as StackFlowAppScreen, type AppScreenProps } from '@stackflow/plugin-basic-ui';
import { SearchBarHeader } from '@/components/molecules';
import { COLOR } from '@/constants';
import { BottomMenubar } from './BottomMenubar';

const style = {
    appBar: {
        borderColor: COLOR.white.main,
        textColor: COLOR.white.main,
        iconColor: COLOR.gray.main,
        backgroundColor: 'transparent',
    },
};
interface Props extends AppScreenProps {
    title?: string;
    center?: boolean;
    bottomNavigation?: boolean;
    searchBar?: boolean;
}

export const AppScreen: FC<Props> = ({ children, title, center, bottomNavigation, searchBar }) => {
    return (
        <StackFlowAppScreen appBar={title ? { ...style.appBar, title } : undefined}>
            {searchBar && <SearchBarHeader />}
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
                component="main"
            >
                {children}
            </Container>
            {bottomNavigation && <BottomMenubar />}
        </StackFlowAppScreen>
    );
};
