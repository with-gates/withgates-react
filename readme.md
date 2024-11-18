# @withgates/react

A lightweight React library for managing feature flags and toggles in your applications.

## Installation

```bash
npm install @withgates/react
```

or 

```bash
yarn add @withgates/react
```


## Features

- 🎛️ Knobs: Basic kill-switches for quick feature toggling
- 🚪 GateGuard: Declarative way to conditionally render components based on knobs, experiments, and rollouts status
- 🔒 Type-safe hooks for accessing feature flag and rollout status
- 🔄 Automatic cache invalidation when feature flag status changes
  

## Quick Start

 Wrap your application with the `GateProvider`:

```tsx
import { GateProvider } from '@withgates/react';

function App() {
  return (
    <GateProvider pubKey="your-public-key">
      <YourApp />
    </GateProvider>
  );
}
```

### Knobs

Knobs are basic kill-switches that allow you to quickly toggle features on and off. They provide a simple boolean value that can be used to control feature visibility.

```tsx
import { useKnob } from '@withgates/react';

function FeatureComponent() {
  const isEnabled = useKnob('feature-key');

  if (!isEnabled) {
    return null;
  }

  return (
    <div>
      Your feature content here
    </div>
  );
}
```

You can also use the `KnobGuard` component for declarative control:

```tsx
import { KnobGuard } from '@withgates/react';

function App() {
  return (
    <KnobGuard knobKey="feature-key">
      <YourFeature />
    </KnobGuard>
  );
}
```



