import { useContext } from 'react';

import { GateContext } from '../Provider';

export function useKnob(knobKey: string, defaultValue?: boolean): boolean {
  const { knobs } = useContext(GateContext) ?? {};

  if (knobs?.[knobKey]) {
    return knobs?.[knobKey];
  }

  return defaultValue ?? false;
}
