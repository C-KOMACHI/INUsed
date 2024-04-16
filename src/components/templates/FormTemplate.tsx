import type { FC } from 'react';
import { FormBox, AppScreen } from '@/components/organisms';

interface Props {
    inquiry?: boolean;
}

export const FormTemplate: FC<Props> = ({ inquiry }) => {
    return (
        <AppScreen header title='운영자문의' backIcon borderRadius>
            <FormBox inquiry={inquiry} />
        </AppScreen>
    );
};
