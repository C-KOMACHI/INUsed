import { stackflow } from '@stackflow/react';
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { Login, Register, Main } from '@/activities';

export const { Stack, useFlow, activities } = stackflow({
    transitionDuration: 350,
    plugins: [basicRendererPlugin()],
    activities: {
        Login,
        Register,
        Main,
    },
    initialActivity: () => 'Main',
});

export type TypeActivities = typeof activities;

export type Activities = keyof TypeActivities;
