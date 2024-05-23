import type { FC } from 'react';
import { Container, Stack, Box } from '@mui/material';
import { AppScreen as StackFlowAppScreen, type AppScreenProps } from '@stackflow/plugin-basic-ui';
import { Image } from '@/components/atoms';
import { Header, PostBottomMenubar } from '@/components/molecules';
import { COLOR } from '@/constants';
import { BottomMenubar } from './BottomMenubar';
import { AppBar } from './AppBar';

const style = {
    container: {
        mt: 1.5,
        minHeight: 'calc(100vh - 101px)',
        backgroundColor: 'white',
        width: '100%',
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
        height: '100%',
        backgroundColor: 'white',
        borderRadius: '30px 30px 0 0',
    },
};

interface Props extends AppScreenProps {
    bottomNavigation?: boolean;
    header?: boolean;
    title?: string;
    writeButton?: boolean;
    searchBar?: boolean;
    borderRadius?: boolean;
    backIcon?: boolean;
    postImg?: string;
    price?: number;
    id?: number;
    checkLiked?: boolean;
    wishCount?: number;
    checkMyPost?: boolean;
}

export const AppScreen: FC<Props> = ({
    children,
    bottomNavigation,
    header,
    title,
    writeButton,
    searchBar,
    borderRadius,
    backIcon,
    postImg,
    price,
    id,
    checkLiked,
    wishCount,
    checkMyPost,
}) => {
    return (
        <StackFlowAppScreen>
            {header && <AppBar title={title} backIcon={backIcon} />}
            {searchBar && <Header />}
            {postImg && <Image src={postImg} alt={title} post disabledBorderRadius/>}
            <Stack sx={style.wrapper}>
                {borderRadius && (
                    <Box sx={style.box1}>
                        <Box sx={style.box2} />
                    </Box>
                )}
                {postImg && (
                    <Box sx={{height: '40px', mt: '-35px', backgroundColor: 'white', borderRadius: '30px 30px 0 0',}}/>
                )}
                <Container component="main" sx={{ ...style.container, ...(borderRadius && { mt: -2.5 }), ...(postImg && {minHeight: 'calc(100vh - 341px)',})}}>
                    {children}
                </Container>
                {bottomNavigation && <BottomMenubar writeButton={writeButton} />}
                {postImg && (
                    <PostBottomMenubar
                    price={price}
                    id={id}
                    checkLiked={checkLiked}
                    wishCount={wishCount}
                    postId={id}
                    checkMyPost={checkMyPost}
                />
                )}
            </Stack>
        </StackFlowAppScreen>
    );
};
