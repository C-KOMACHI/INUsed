import { type FC, useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Stack, Divider, List, ListItemButton, Container } from '@mui/material';
import { useFlow } from '@/stackflow';
import { Text, Icon } from '@/components/atoms';
import { AppScreen } from '@/components/organisms';
import { ProfileInformation } from '@/components/molecules';

const style = {
    overflow: 'auto',
    maxHeight: '100%',
};

type User = {
    id: number;
    email: string;
    nickname: string;
    profileImage: string;
    fireTemperature: number;
};
interface ApiResponse {
    code: string;
    message: string;
    user: User;
}

export const MyPageTemplate: FC = () => {
    const { push } = useFlow();
    const { replace } = useFlow();

    const handleClick = (page: 'Notice' | 'Inquiry' | 'Keyword' | 'TermsOfService' | 'PrivacyPolicy') => {
        push(page, {});
    };

    const [user, setUser] = useState<User>();

    useEffect(() => {
        const fetchPosts = () => {
            const accessToken = localStorage.getItem('accessToken');

            axios
                .get<ApiResponse>(`https://api.inused.store/api/v1/user/get`, {
                    headers: {
                        Authorization: accessToken,
                    },
                })
                .then((response) => {
                    setUser(response.data.user);
                })
                .catch(() => {});
        };
        fetchPosts();
    }, []);

    return (
        <AppScreen bottomNavigation header title="내 프로필" borderRadius>
            <Container sx={style}>
                <ProfileInformation
                    src={user?.profileImage}
                    nickName={user?.nickname}
                    email={user?.email}
                    temperature={user?.fireTemperature}
                    myProfile
                />

                <Grid container spacing={2} pt={3} pb={1}>
                    <Grid item xs={4}>
                        <Stack alignItems="center" onClick={() => replace('Heart', {}, { animate: false })}>
                            <Icon src="./icons/Heart.png" />
                            <Text type="medium">관심 목록</Text>
                        </Stack>
                    </Grid>
                    <Grid item xs={4}>
                        <Stack alignItems="center" onClick={() => push('MyPost', {})}>
                            <Icon src="./icons/Cart.png" />
                            <Text type="medium">내 게시물</Text>
                        </Stack>
                    </Grid>
                    <Grid item xs={4}>
                        <Stack alignItems="center" onClick={() => push('Keyword', {})}>
                            <Icon src="./icons/AlarmAdd.png" />
                            <Text type="medium">키워드 알림</Text>
                        </Stack>
                    </Grid>
                </Grid>
                <Divider />
                <List aria-label="mailbox folders">
                    <ListItemButton sx={{ py: 1 }} onClick={() => handleClick('Notice')}>
                        <Text type="medium">공지사항</Text>
                    </ListItemButton>

                    <ListItemButton sx={{ py: 1 }} onClick={() => handleClick('Inquiry')}>
                        <Text type="medium">운영자 문의</Text>
                    </ListItemButton>

                    <ListItemButton sx={{ py: 1 }} onClick={() => handleClick('TermsOfService')}>
                        <Text type="medium">서비스 이용 약관</Text>
                    </ListItemButton>

                    <ListItemButton sx={{ py: 1 }} onClick={() => handleClick('PrivacyPolicy')}>
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
