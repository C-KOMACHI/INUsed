import type { FC } from 'react';
import styled from '@emotion/styled';
import { Stack } from '@mui/material';
import { FormBox } from '@/components/organisms';
import { Footer } from '@/components/atoms';
import { COLOR } from '@/constants';

const LoginTemplateBlock = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    top: 0;
    right: 0;
    background: ${COLOR.blue.main};
    overflow: scroll;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const LoginTemplate: FC = () => {
    return (
        <LoginTemplateBlock>
            <Stack spacing={1}>
                <FormBox />
                <Footer />
            </Stack>
        </LoginTemplateBlock>
    );
};
