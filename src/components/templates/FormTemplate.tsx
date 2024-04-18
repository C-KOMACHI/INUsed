import type { FC } from 'react';
import { Stack } from '@mui/material';
import { Button } from '@/components/atoms';
import { FormInput } from '@/components/molecules';
import { AppScreen } from '@/components/organisms';

interface Props {
    inquiry?: boolean;
}

export const FormTemplate: FC<Props> = () => {
    return (
        <AppScreen header title="운영자문의" backIcon borderRadius>
            <Stack pt={2} spacing={2}>
                <FormInput title="제목" placeholder="제목을 입력해주세요." />
                <FormInput big title="내용" placeholder="내용을 입력해주세요." />
                <Button>문의하기</Button>
            </Stack>
        </AppScreen>
    );
};
