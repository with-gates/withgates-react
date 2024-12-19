import React from 'react';
import { useExperiment } from '../hooks';

interface ExperimentGuardProps {
  experimentKey: string;
  children: React.ReactNode;
  fallback?: React.ReactNode;
  loadingComponent?: React.ReactNode;
}

/**
 * A component that conditionally renders its children based on the state of an experiment/AB test.
 * @param key - The unique identifier for the experiment
 * @param children - The component to render if the experiment is enabled
 * @param fallback - The component to render if the experiment is disabled
 * @param loadingComponent - The component to render while the experiment is being loaded
 * @example
 * ```tsx
 * <ExperimentGuard key="new-layout-test">
 *   <NewLayoutVersion />
 * </ExperimentGuard>
 * ```
 */
export function ExperimentGuard({
  experimentKey,
  children,
  fallback = null,
}: ExperimentGuardProps) {
  const isEnabled = useExperiment(experimentKey);

  if (isEnabled) {
    return <>{children}</>;
  }

  return <>{fallback}</>;
}
