import type { FC } from 'react';
import { Box, Button, Divider } from '@mui/material';
import { useFlow } from '@/stackflow';
import { COLOR } from '@/constants';
import { HeartIcon, Text } from '@/components/atoms';

interface Props {
    price?: number;
    id?: number;
    checkLiked?: boolean;
    wishCount?: number;
    checkMyPost?: boolean;
}

const style = {
    container: {
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 1,
        height: '66px',
        position: 'sticky',
        bottom: '0',
        borderTop: '1px solid rgba(0, 0, 0, 0.12)',
        background: 'white',
    },
    button: {
        background: COLOR.blue.fab,
        fontFamily: 'Jua',
        borderRadius: '15px',
        mr:'20px',
        fontSize: '1.1rem',
    },
};

export const PostBottomMenubar: FC<Props> = ({ price, id, checkLiked, wishCount, checkMyPost }) => {
    const { push } = useFlow();

    const ChatHandleClick = () => {
        push('Chat', {});
    };

    return (
        <Box sx={style.container}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}> {/* 추가 */}
                <HeartIcon
                    direction="column"
                    spacing="0"
                    containerStyle={{ left: '1.3rem', top: '13px' }}
                    textStyle={{ position: 'static', paddingLeft: '6.6px' }}
                    id={id}
                    checkLiked={checkLiked}
                    wishCount={wishCount}
                />
                <Divider orientation="vertical" sx={{ marginLeft: '3.9rem', marginRight: '1.5rem', height: '40px' }} />
                <Text type="large">{price}원</Text>
            </Box>
            {!checkMyPost && (
                <Button size="medium" variant="contained" sx={style.button} onClick={ChatHandleClick}>
                    채팅하기
                </Button>
            )}
            {!!checkMyPost && (
                <Button size="medium" variant="contained" sx={style.button}>
                    상태 변경
                </Button>
            )}
        </Box>
    );
};

