import { createRoot } from 'react-dom/client';
import { App } from './app';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('rootElement is null');
}

const root = createRoot(rootElement);
root.render(<App />);
