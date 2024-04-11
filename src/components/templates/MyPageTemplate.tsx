import type { FC } from 'react';
import { Grid, Stack, Divider, List, ListItemButton, Container } from '@mui/material';
import { FavoriteBorder, ShoppingCartOutlined, NotificationAddOutlined } from '@mui/icons-material';
import { useFlow } from '@/stackflow';
import { Text } from '@/components/atoms';
import { AppScreen } from '@/components/organisms';
import { ProfileInformation } from '@/components/molecules';

const style = {
    overflow: 'auto',
    maxHeight: '100%',
};

export const MyPageTemplate: FC = () => {
    const { push } = useFlow();

    const handleClick = () => {
        push('Notice', {});
    };

    return (
        <AppScreen bottomNavigation header title="내 프로필" borderRadius>
            <Container sx={style}>
                <ProfileInformation
                    alt="프로필 사진"
                    src="/profile.png"
                    nickName="유잼잼"
                    email="jin03021425@inu.ac.kr"
                    temperature={1300}
                    myProfile
                />

                <Grid container spacing={2} pt={3} pb={1}>
                    <Grid item xs={4}>
                        <Stack alignItems="center">
                            <FavoriteBorder fontSize="large" />
                            <Text type="medium">관심 목록</Text>
                        </Stack>
                    </Grid>
                    <Grid item xs={4}>
                        <Stack alignItems="center">
                            <ShoppingCartOutlined fontSize="large" />
                            <Text type="medium">판매 내역</Text>
                        </Stack>
                    </Grid>
                    <Grid item xs={4}>
                        <Stack alignItems="center">
                            <NotificationAddOutlined fontSize="large" />
                            <Text type="medium">키워드 알림</Text>
                        </Stack>
                    </Grid>
                </Grid>
                <Divider />
                <List aria-label="mailbox folders">
                    <ListItemButton sx={{ py: 1 }} onClick={handleClick}>
                        <Text type="medium">공지사항</Text>
                    </ListItemButton>
                    <ListItemButton sx={{ py: 1 }}>
                        <Text type="medium">운영자 문의</Text>
                    </ListItemButton>
                    <ListItemButton sx={{ py: 1 }}>
                        <Text type="medium">서비스 이용 약관</Text>
                    </ListItemButton>
                    <ListItemButton sx={{ py: 1 }}>
                        <Text type="medium">개인정보 처리방침</Text>
                    </ListItemButton>
                    <ListItemButton sx={{ py: 1 }}>
                        <Text type="medium">회원 탈퇴</Text>
                    </ListItemButton>
                </List>
            </Container>
        </AppScreen>
    );
};
