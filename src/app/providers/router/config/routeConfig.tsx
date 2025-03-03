import { type ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { HomePage } from '@/pages/HomePage';
import { ResultPage } from '@/pages/ResultPage';
import { APP_ROUTES } from '@/shared/const/router';

interface RouteProps {
  path: string;
  element: ReactNode;
}

export const routeConfig: RouteProps[] = [
  {
    path: APP_ROUTES.HOME_PAGE,
    element: <HomePage />,
  },
  {
    path: `${APP_ROUTES.RESULTS()}/:id`,
    element: <ResultPage />,
  },
  {
    path: APP_ROUTES.NOT_FOUND,
    element: <Navigate to={APP_ROUTES.HOME_PAGE} replace />,
  },
];
