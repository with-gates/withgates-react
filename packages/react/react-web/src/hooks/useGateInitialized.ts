import { useContext } from 'react';
import { GateContext } from '../Provider';

export function useGateInitialized(): boolean {
  const context = useContext(GateContext);

  if (!context) {
    throw new Error('useGateInitialized must be used within a GateProvider');
  }

  return context.isInitialized;
}
