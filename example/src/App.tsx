import { useState } from 'react';
import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

import { KnobGuard, useGateInitialized, useKnob } from '@withgates/react';

function App() {
  const [count, setCount] = useState(0);
  const isEnabled = useKnob('new_flag');
  const isInitialized = useGateInitialized();

  if (!isInitialized) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div>
        {isEnabled ? 'Enabled' : 'disabled'}
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <div className="card">
        <KnobGuard knobKey="new_flag" fallback={<p>Feature is disabled</p>}>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </KnobGuard>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
