import { GateProvider } from '@withgates/react-web';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GateProvider pubKey="YOUR_PUBLIC_KEY">
      <App />
    </GateProvider>
  </StrictMode>
);
