import React, { createContext, useEffect, useState } from 'react';
import { fetchGates } from './utils/fetchGates';
import { GateStorage } from './utils/storage';

export interface GateContextType {
  knobs: Record<string, any>;
  isInitialized: boolean;
}

export const GateContext = createContext<GateContextType | undefined>(
  undefined
);

interface GateProviderProps {
  pubKey: string;
  children: React.ReactNode;
}

export function GateProvider({ pubKey, children }: GateProviderProps) {
  const [knobs, setKnobs] = useState<Record<string, any>>({});

  const [isInitialized, setInitialized] = useState(false);

  useEffect(() => {
    intiGates();
  }, [pubKey]);

  const intiGates = async () => {
    await GateStorage.init();

    const gates = await fetchGates(pubKey);

    await Promise.all(
      Object.entries(gates).map((entries) => {
        const [storeName, values] = entries;

        for (const [key, value] of Object.entries(values)) {
          if (storeName === 'knobs') {
            setKnobs((prev) => ({
              ...prev,
              [key]: value,
            }));
          }

          GateStorage.saveGates(storeName, { [key]: value });
        }
      })
    );

    setInitialized(true);
  };

  return (
    <GateContext.Provider value={{ knobs, isInitialized }}>
      {children}
    </GateContext.Provider>
  );
}
