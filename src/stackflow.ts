import { stackflow } from '@stackflow/react';
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { basicUIPlugin } from '@stackflow/plugin-basic-ui';
import { Login, Register, Main, MyPage, Post, Writer } from '@/activities';

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
    },
    initialActivity: () => 'Register',
});

export type TypeActivities = typeof activities;

export type Activities = keyof TypeActivities;
