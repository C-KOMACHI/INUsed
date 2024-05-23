import type { FC } from 'react';
import { Grid, Stack } from '@mui/material';
import { Icon, Text } from '@/components/atoms';
import { AppScreen } from '@/components/organisms';
import { useFlow } from '@/stackflow';

export const KategorieTemplate: FC = () => {
    const { push } = useFlow();

    return (
        <AppScreen header title="카테고리" borderRadius bottomNavigation>
            <Grid container mt={3}>
                <Grid item xs={4}>
                    <Stack alignItems="center" textAlign="center" mb={3} onClick={()=>{push('KategorieSub',{id:1, title:'남성 의류'});}}>
                        <Icon big src="./icons/Kategorie/1.png" />
                        <Text type="medium">남성 의류</Text>
                    </Stack>
                </Grid>
                <Grid item xs={4}>
                    <Stack alignItems="center" textAlign="center" mb={3} onClick={()=>{push('KategorieSub',{id:2, title:'여성 의류'});}}>
                        <Icon big src="./icons/Kategorie/2.png" />
                        <Text type="medium">여성 의류</Text>
                    </Stack>
                </Grid>
                <Grid item xs={4}>
                    <Stack alignItems="center" textAlign="center" mb={3} onClick={()=>{push('KategorieSub',{id:3, title:'뷰티&미용'});}}>
                        <Icon big src="./icons/Kategorie/3.png" />
                        <Text type="medium">뷰티&미용</Text>
                    </Stack>
                </Grid>
                <Grid item xs={4}>
                    <Stack alignItems="center" textAlign="center" mb={3} onClick={()=>{push('KategorieSub',{id:4, title:'도서'});}}>
                        <Icon big src="./icons/Kategorie/4.png" />
                        <Text type="medium">도서</Text>
                    </Stack>
                </Grid>
                <Grid item xs={4}>
                    <Stack alignItems="center" textAlign="center" mb={3} onClick={()=>{push('KategorieSub',{id:5, title:'패션잡화'});}}>
                        <Icon big src="./icons/Kategorie/5.png" />
                        <Text type="medium">패션잡화</Text>
                    </Stack>
                </Grid>
                <Grid item xs={4}>
                    <Stack alignItems="center" textAlign="center" mb={3} onClick={()=>{push('KategorieSub',{id:6, title:'티켓&교환권'});}}>
                        <Icon big src="./icons/Kategorie/6.png" />
                        <Text type="medium">티켓&교환권</Text>
                    </Stack>
                </Grid>
                <Grid item xs={4}>
                    <Stack alignItems="center" textAlign="center" mb={3} onClick={()=>{push('KategorieSub',{id:7, title:'가구&인테리어'});}}>
                        <Icon big src="./icons/Kategorie/7.png" />
                        <Text type="medium">가구&인테리어</Text>
                    </Stack>
                </Grid>
                <Grid item xs={4}>
                    <Stack alignItems="center" textAlign="center" mb={3} onClick={()=>{push('KategorieSub',{id:8, title:'디지털 기기'});}}>
                        <Icon big src="./icons/Kategorie/8.png" />
                        <Text type="medium">디지털 기기</Text>
                    </Stack>
                </Grid>
                <Grid item xs={4}>
                    <Stack alignItems="center" textAlign="center" mb={3} onClick={()=>{push('KategorieSub',{id:9, title:'생활 가전'});}}>
                        <Icon big src="./icons/Kategorie/9.png" />
                        <Text type="medium">생활 가전</Text>
                    </Stack>
                </Grid>
                <Grid item xs={4}>
                    <Stack alignItems="center" textAlign="center" mb={3} onClick={()=>{push('KategorieSub',{id:10, title:'스포츠&레저'});}}>
                        <Icon big src="./icons/Kategorie/10.png" />
                        <Text type="medium">스포츠&레저</Text>
                    </Stack>
                </Grid>
                <Grid item xs={4}>
                    <Stack alignItems="center" textAlign="center" mb={3} onClick={()=>{push('KategorieSub',{id:11, title:'취미&게임&음반'});}}>
                        <Icon big src="./icons/Kategorie/11.png" />
                        <Text type="medium">취미&게임&음반</Text>
                    </Stack>
                </Grid>
                <Grid item xs={4}>
                    <Stack alignItems="center" textAlign="center" mb={3} onClick={()=>{push('KategorieSub',{id:12, title:'가공 식품'});}}>
                        <Icon big src="./icons/Kategorie/12.png" />
                        <Text type="medium">가공 식품</Text>
                    </Stack>
                </Grid>
                <Grid item xs={4}>
                    <Stack alignItems="center" textAlign="center" mb={3} onClick={()=>{push('KategorieSub',{id:13, title:'식물'});}}>
                        <Icon big src="./icons/Kategorie/13.png" />
                        <Text type="medium">식물</Text>
                    </Stack>
                </Grid>
                <Grid item xs={4}>
                    <Stack alignItems="center" textAlign="center" mb={3} onClick={()=>{push('KategorieSub',{id:14, title:'반려동물 용품'});}}>
                        <Icon big src="./icons/Kategorie/14.png" />
                        <Text type="medium">반려동물 용품</Text>
                    </Stack>
                </Grid>
                <Grid item xs={4}>
                    <Stack alignItems="center" textAlign="center" mb={3} onClick={()=>{push('KategorieSub',{id:15, title:'기타'});}}>
                        <Icon big src="./icons/Kategorie/15.png" />
                        <Text type="medium">기타</Text>
                    </Stack>
                </Grid>
            </Grid>
        </AppScreen>
    );
};
