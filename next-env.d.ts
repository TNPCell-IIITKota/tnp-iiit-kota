/// <reference types="next" />
/// <reference types="next/types/global" />

import type * as React from 'react';

declare module 'react' {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions, @typescript-eslint/no-unnecessary-qualifier
  interface HTMLAttributes<T> extends React.DOMAttributes<T> {
    cx?: string;
  }
}
