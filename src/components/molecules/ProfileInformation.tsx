import type { FC } from 'react';
import { Stack } from '@mui/material';
import { Profile, Text, Temperature } from '@/components/atoms';
import { useFlow } from '@/stackflow';

interface Props {
    alt: string;
    src?: string;
    nickName: string;
    email: string;
    temperature: number;
    post?: boolean;
    myProfile?: boolean;
}

const style = {
    container: {
        alignItems: 'center',
    },
};

export const ProfileInformation: FC<Props> = ({ alt, src, nickName, email, temperature, post, myProfile }) => {
    const { push } = useFlow();

    const handleClick = () => {
        push('MyPage', {});
    };
    return (
        <>
            {post && (
                <Stack direction="row" alignItems="center" spacing={1} onClick={handleClick}>
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <Profile alt={alt} src={src} small />
                        <Text type="medium">{nickName}</Text>
                    </Stack>
                    <Temperature temperature={temperature} post />
                </Stack>
            )}
            {myProfile && (
                <Stack spacing={2} sx={{ px: 3, pt: 4 }}>
                    <Stack sx={style.container}>
                        <Profile alt={alt} src={src} />
                        <Text type="large">{nickName}</Text>
                        <Text type="mediumGray">{email}</Text>
                    </Stack>
                    <Temperature temperature={temperature} myProfile />
                </Stack>
            )}
        </>
    );
};
