import type { FC } from 'react';
import { Grid, Stack, Divider, List, ListItemButton } from '@mui/material';
import { FavoriteBorder, ShoppingCartOutlined, NotificationAddOutlined } from '@mui/icons-material';
import { Text } from '@/components/atoms';
import { AppScreen } from '@/components/organisms';
import { ProfileInformation } from '@/components/molecules';

export const MyPageTemplate: FC = () => {
    return (
        <AppScreen bottomNavigation>
            <ProfileInformation
                alt="프로필 사진"
                src="/profile.png"
                nickName="유잼잼"
                email="jin03021425@inu.ac.kr"
                temperature={50}
            />

            <Grid container spacing={2} p={3}>
                <Grid item xs={4}>
                    <Stack alignItems="center">
                        <FavoriteBorder fontSize="large" />
                        <Text>관심 목록</Text>
                    </Stack>
                </Grid>
                <Grid item xs={4}>
                    <Stack alignItems="center">
                        <ShoppingCartOutlined fontSize="large" />
                        <Text>판매 내역</Text>
                    </Stack>
                </Grid>
                <Grid item xs={4}>
                    <Stack alignItems="center">
                        <NotificationAddOutlined fontSize="large" />
                        <Text>키워드 알림</Text>
                    </Stack>
                </Grid>
            </Grid>

            <Divider />

            <List aria-label="mailbox folders" sx={{ pl: 2 }}>
                <ListItemButton sx={{ py: 1 }}>
                    <Text>공지사항</Text>
                </ListItemButton>
                <ListItemButton sx={{ py: 1 }}>
                    <Text>운영자 문의</Text>
                </ListItemButton>
                <ListItemButton sx={{ py: 1 }}>
                    <Text>약관 및 정책</Text>
                </ListItemButton>
            </List>
        </AppScreen>
    );
};
