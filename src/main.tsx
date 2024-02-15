import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { CssBaseline } from '@mui/material';
import { Stack } from '@/stackflow';

import '@stackflow/plugin-basic-ui/index.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <CssBaseline />
        <Stack />
    </StrictMode>,
);
