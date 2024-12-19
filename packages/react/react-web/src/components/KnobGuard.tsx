import React from 'react';
import { useKnob } from '../hooks';

interface KnobGuardProps {
  knobKey: string;
  children: React.ReactNode;
  fallback?: React.ReactNode;
  loadingComponent?: React.ReactNode;
}

/**
 * A component that conditionally renders its children based on the state of a feature flag/knob.
 * @param knobKey - The unique identifier for the feature flag
 * @param children - The component to render if the feature flag is enabled
 * @param fallback - The component to render if the feature flag is disabled
 * @param loadingComponent - The component to render while the feature flag is being loaded
 * @example
 * ```tsx
 * <KnobGuard key="my-feature">
 *   <MyComponent />
 * </KnobGuard>
 * ```
 */
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
