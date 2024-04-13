import { type FC } from 'react';
import { useActivity } from '@stackflow/react';
import { Box, Grid, Stack } from '@mui/material';
import { WriteButton, Icon, Text } from '@/components/atoms';
import { COLOR } from '@/constants';
import { useFlow } from '@/stackflow';

interface Props {
    writeButton?: boolean;
}

const style = {
    container: {
        width: 1,
        height: '60px',
        position: 'sticky',
        bottom: '0', 
        backgroundColor: COLOR.blue.main,
    },

    button: {
        color: COLOR.gray.main,
        '& .MuiBottomNavigationAction-label': {
            fontSize: '0.7rem',
        },
    },
};

export const BottomMenubar: FC<Props> = ({ writeButton }) => {
    const activity = useActivity();
    const { replace } = useFlow();

    const handleClick = (iconName: 'Main' | 'MyPage') => {
        replace(iconName === 'Main' ? 'Main' : 'MyPage', {}, { animate: false });
    };

    return (
        <Box sx={style.container}>
            {writeButton && <WriteButton />}
                <Grid container textAlign='center' pt={1}>
                    <Grid item xs={2.4} onClick={() => handleClick('Main')}>
                        <Stack alignItems="center">
                            <Icon gray src={activity.name === 'Main' ? "/icons/Home2.png" : "/icons/Home.png"} />
                            <Text type="smallGray">홈</Text>
                        </Stack>
                    </Grid>
                    <Grid item xs={2.4}>
                        <Stack alignItems="center">
                            <Icon gray src="/icons/Kategorie.png" />
                            <Text type="smallGray">카테고리</Text>
                        </Stack>
                    </Grid>
                    <Grid item xs={2.4}>
                        <Stack alignItems="center">
                            <Icon gray src="/icons/Heart.png" />
                            <Text type="smallGray">관심</Text>
                        </Stack>
                    </Grid>
                    <Grid item xs={2.4}>
                        <Stack alignItems="center">
                            <Icon gray src="/icons/Chatting.png" />
                            <Text type="smallGray">채팅</Text>
                        </Stack>
                    </Grid>
                    <Grid item xs={2.4} onClick={() => handleClick('MyPage')}>
                        <Stack alignItems="center">
                            <Icon gray src={activity.name === 'MyPage' ? "/icons/Profile2.png" : "/icons/Profile.png"} />
                            <Text type="smallGray">내 프로필</Text>
                        </Stack>
                    </Grid>
                </Grid>
        </Box>
    );
};
