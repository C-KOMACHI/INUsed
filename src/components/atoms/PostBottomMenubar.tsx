import type { FC } from 'react';
import { Box, Button, Grid, Divider } from '@mui/material';
import { COLOR } from '@/constants';
import { HeartIcon, Text } from '@/components/atoms';

interface Props {
    subTitle2: string;
}

const style = {
    container: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
        height: '60px',
        background: COLOR.blue.main,
        overflowX: 'hidden',
        zIndex: 1,
        minHeight: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
};

export const PostBottomMenubar: FC<Props> = ({ subTitle2 }) => {
    return (
        <Box sx={style.container}>
            <Grid container spacing={2} sx={{ paddingTop: '5px' }}>
                <Grid item xs={2.3}>
                    <HeartIcon
                        direction="column"
                        spacing="0"
                        containerStyle={{ left: '19px', top: '7px' }}
                        textStyle={{ position: 'static', paddingLeft: '6.5px' }}
                    />
                    <Divider orientation="vertical" />
                </Grid>
                <Grid item xs={6.7}>
                    <Text type="title2">{subTitle2}</Text>
                </Grid>
                <Grid item xs={3}>
                    <Button>채팅하기</Button>
                </Grid>
            </Grid>
        </Box>
    );
};
