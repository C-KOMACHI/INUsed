import type { FC } from 'react';
import { Stack } from '@mui/material';
import { Profile, Text, Temperature } from '@/components/atoms';
import { useFlow } from '@/stackflow';

interface Props {
    src?: string;
    nickName?: string;
    email?: string;
    temperature?: number;
    post?: boolean;
    myProfile?: boolean;
    id: number;
    checkMyPost?: boolean;
}

const style = {
    container: {
        alignItems: 'center',
    },
};

export const ProfileInformation: FC<Props> = ({
    src,
    nickName,
    email,
    temperature,
    post,
    myProfile,
    id,
    checkMyPost,
}) => {
    const { push } = useFlow();

    const handleClick = (isMine: boolean | undefined) => {
        if (isMine) {
            push('MyPage', {});
        } else {
            push('UserPage', { id });
        }
    };
    return (
        <>
            {post && (
                <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    sx={{ pl: '10px' }}
                    onClick={() => handleClick(checkMyPost)}
                >
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <Profile src={src} small />
                        <Text type="medium">{nickName}</Text>
                    </Stack>
                    <Temperature temperature={temperature ?? 0} post />
                </Stack>
            )}
            {myProfile && (
                <Stack spacing={2} sx={{ px: 1, pt: 2.5 }}>
                    <Stack sx={style.container}>
                        <Profile src={src} />
                        <Text type="large">{nickName}</Text>
                        <Text type="mediumGray">{email}</Text>
                    </Stack>
                    <Temperature temperature={temperature ?? 0} myProfile />
                </Stack>
            )}
        </>
    );
};
