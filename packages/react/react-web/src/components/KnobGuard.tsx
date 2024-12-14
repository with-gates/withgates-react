import React from 'react';
import { useKnob } from '../hooks';

interface KnobGuardProps {
  knobKey: string;
  children: React.ReactNode;
  fallback?: React.ReactNode;
  loadingComponent?: React.ReactNode;
}

export function KnobGuard({
  knobKey,
  children,
  fallback = null,
}: KnobGuardProps) {
  const isEnabled = useKnob(knobKey);

  if (isEnabled) {
    return <>{children}</>;
  }

  return <>{fallback}</>;
}
