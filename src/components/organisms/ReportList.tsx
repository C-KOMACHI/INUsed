import type { FC } from 'react';
import { Stack } from '@mui/material';
import { PostItem } from '@/components/molecules';

export interface Report {
    id: number;
    title?: string;
}

interface Props {
    reports: Report[];
}

export const ReportList: FC<Props> = ({ reports }) => {
    return (
        <Stack spacing={3}>
            {reports.map(({ id, title }) => {
                return <PostItem key={id} title={title} report />;
            })}
        </Stack>
    );
};
