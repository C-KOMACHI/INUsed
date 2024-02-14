import type { FC } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

export const Router: FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" />
      </Routes>
    </HashRouter>
  );
};
