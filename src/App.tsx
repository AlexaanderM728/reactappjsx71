import React, { FC } from 'react';
import JSXRules from './JSXRules';
import FancyTable from './FancyTable';
import Multiple from './Multiple';

import './style.css';

export const App: FC = () => {
  return (
    <div>
      <JSXRules text="This is a blockquote with JSX Rules." />
      <h2>Fancy Table</h2>
      <FancyTable n={5} />
      <Multiple name="Multiple Component" number={3} />
    </div>
  );
};
