import type { FC } from 'react';
import { Text } from '@/components/atoms';
import { PostItem } from '@/components/molecules';
import { AppScreen } from '@/components/organisms';

interface Props {
    header?: string;
    title?: string;
    subTitle1?: string;
    text: string;
}

export const DocsTemplate: FC<Props> = ({header, title, subTitle1, text}) => {
    return (
        <AppScreen header title={header} borderRadius backIcon>
            {title && (<PostItem notice title={title} subTitle1={subTitle1} />)}
            <Text type="medium">
                {text}
            </Text>
        </AppScreen>
    );
};
