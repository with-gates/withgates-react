import { GateProvider } from '@withgates/react-web';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GateProvider pubKey="pub_dev_ce7124ca43a4452aad55b4d067e1c1b6">
      <App />
    </GateProvider>
  </StrictMode>
);
