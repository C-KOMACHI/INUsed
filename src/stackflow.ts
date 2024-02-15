import { stackflow } from '@stackflow/react';
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { Login } from '@/activities';

export const { Stack, useFlow, activities } = stackflow({
    transitionDuration: 350,
    plugins: [basicRendererPlugin()],
    activities: {
        Login,
    },
    initialActivity: () => 'Login',
});

export type TypeActivities = typeof activities;

export type Activities = keyof TypeActivities;
