import React from 'react';

import { MemoryRouter } from 'react-router-dom';

const withMemoryRouter = (Story: React.ComponentType) => {
  return (
    <MemoryRouter>
      <Story />
    </MemoryRouter>
  );
};

export default withMemoryRouter;
