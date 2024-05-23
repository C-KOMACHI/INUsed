import { stackflow } from '@stackflow/react';
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { basicUIPlugin } from '@stackflow/plugin-basic-ui';
import {
    Login,
    Register,
    Main,
    MyPage,
    Post,
    Writer,
    Notice,
    Report,
    NoticeSub,
    FindPassword,
    Kategorie,
    Heart,
    MyPost,
    Inquiry,
    Keyword,
    SuccessRegister,
    TermsOfService,
    PrivacyPolicy,
    Chat,
    KategorieSub,
} from '@/activities';

export const { Stack, useFlow, activities } = stackflow({
    transitionDuration: 350,
    plugins: [
        basicRendererPlugin(),
        basicUIPlugin({
            theme: 'cupertino',
        }),
    ],
    activities: {
        Login,
        Register,
        Main,
        MyPage,
        Post,
        Writer,
        Notice,
        Report,
        NoticeSub,
        FindPassword,
        Kategorie,
        Heart,
        MyPost,
        Inquiry,
        Keyword,
        SuccessRegister,
        TermsOfService,
        PrivacyPolicy,
        Chat,
        KategorieSub,
    },
    initialActivity: () => 'Keyword',
});

export type TypeActivities = typeof activities;

export type Activities = keyof TypeActivities;
