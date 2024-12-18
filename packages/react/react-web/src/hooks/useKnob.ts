import { useContext } from 'react';

import { GateContext } from '../Provider';
import { createHash } from '../utils/hash';

export function useKnob(knobKey: string, defaultValue = false): boolean {
  const { knobs } = useContext(GateContext) ?? {};

  const hashedKey = createHash(knobKey);

  if (knobs?.[hashedKey]) {
    return knobs?.[hashedKey];
  }

  return defaultValue ?? false;
}
