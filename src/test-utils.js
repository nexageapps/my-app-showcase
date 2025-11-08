import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

/**
 * Custom render function that wraps components with necessary providers
 */
export function renderWithRouter(ui, { route = '/', ...renderOptions } = {}) {
  return render(
    <MemoryRouter initialEntries={[route]}>
      {ui}
    </MemoryRouter>,
    renderOptions
  );
}

export * from '@testing-library/react';
