import type { FC } from 'react';
import { Stack } from '@mui/material';
import { FormBox, AppScreen } from '@/components/organisms';
import { Footer } from '@/components/atoms';

interface Props {
    login?: boolean;
    register?: boolean;
    findPassword?: boolean;
}


const style = {
    stack: {
        height: '100%',
        alignItems: 'center',
        pt: 15,
    }
};

export const StartTemplate: FC<Props> = ({login, register, findPassword}) => {
    return (
        <AppScreen backIcon={!login}>
            <Stack spacing={1} sx={style.stack}>
                <FormBox login={login} register={register} findPassword={findPassword} />
                {login && (
                    <Footer />
                )}
            </Stack>
        </AppScreen>
    );
};
