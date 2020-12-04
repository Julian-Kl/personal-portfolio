import React from 'react';
import './colorSchemeToggle.scss';

interface Props {
    mode: string;
}

export const ColorSchemeToggle: React.FC<Props> = () => {
  return (
    <React.Fragment>
      <div id="light-dark-toggle">
        <p>Light Dark Toggle</p>
      </div>
    </React.Fragment>
  );
}
