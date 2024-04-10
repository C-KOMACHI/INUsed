import type { FC } from 'react';
import { Container, Stack, Box } from '@mui/material';
import { AppScreen as StackFlowAppScreen, type AppScreenProps } from '@stackflow/plugin-basic-ui';
import { Header } from '@/components/molecules';
import { COLOR } from '@/constants';
import { BottomMenubar } from './BottomMenubar';
import { AppBar } from './AppBar';

const style = {
    container: {
        mt: -2.5,
        minHeight: 'calc(100vh - 101px)',
        backgroundColor: 'white',
    },
    wrapper: {
        display: 'flex',
    },
    box1: {
        height: '30px',
        backgroundColor: COLOR.blue.main,
        position: 'sticky',
        top: '60px',
    },
    box2: {
        height: '30px',
        backgroundColor: 'white',
        borderRadius: '30px 30px 0 0',
    }
};

interface Props extends AppScreenProps {
    bottomNavigation?: boolean;
    header?: boolean;
    title?: string;
    writeButton?: boolean;
    searchBar?: boolean;
}

export const AppScreen: FC<Props> = ({ children, bottomNavigation, header, title, writeButton, searchBar }) => {
    return (
        <StackFlowAppScreen>
            {header && <AppBar title={title} />}
            {searchBar && <Header />}
            <Stack sx={style.wrapper}>
                <Box sx={style.box1}>
                    <Box sx={style.box2} />
                </Box>
                <Container component="main" sx={style.container}>
                    {children}
                </Container>
                {bottomNavigation && <BottomMenubar writeButton={writeButton} />}
            </Stack>
        </StackFlowAppScreen>
    );
};
