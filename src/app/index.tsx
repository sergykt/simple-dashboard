import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './providers/router';
import '@/shared/ui/index.scss';

export const App = () => (
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
);
