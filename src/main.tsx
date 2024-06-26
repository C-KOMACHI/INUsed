import { createRoot } from 'react-dom/client';
import { CssBaseline } from '@mui/material';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { Stack } from '@/stackflow';

import '@stackflow/plugin-basic-ui/index.css';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
        <QueryClientProvider client={queryClient}>
            <CssBaseline />
            <Stack />
        </QueryClientProvider>
);
