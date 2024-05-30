import type { FC } from 'react';
import { Stack } from '@mui/material';
import { Text } from '@/components/atoms';
import { PostItem } from '@/components/molecules';
import { AppScreen } from '@/components/organisms';

interface Props {
    header?: string;
    title?: string;
    createdAt?: string;
    content?: string;
}

export const DocsTemplate: FC<Props> = ({ header, title, createdAt, content = '' }) => {
    const replaceNewlinesWithBr = (text: string) => {
        return text.split('\n').map((item) => (
            <span>
                {item}
                <br />
            </span>
        ));
    };

    return (
        <AppScreen header title={header} borderRadius backIcon>
            <Stack pt={2} spacing={2}>
                {title && <PostItem notice title={title} createdAt={createdAt} />}
                <Text type="medium">{replaceNewlinesWithBr(content)}</Text>
            </Stack>
        </AppScreen>
    );
};
