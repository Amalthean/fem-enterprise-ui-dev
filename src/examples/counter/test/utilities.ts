import type { ReactElement } from 'react';
import { render as renderComponent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

type RenderOptions = Parameters<typeof renderComponent>[1];  // get the type of the 2nd parameter of renderComponent

export * from '@testing-library/react';

export const render = (ui: ReactElement, options?: RenderOptions) => {
  return {
    ...renderComponent(ui, options),
    user: userEvent.setup(),
  };
};


/**
 * For a complete example, see: test/utilities.ts
 */
