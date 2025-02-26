import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PageLoader } from './PageLoader';
import { routeConfig } from '../config/routeConfig';

export const AppRouter = () => (
  <div className='page-wrapper'>
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routeConfig.map(({ element, path }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  </div>
);
