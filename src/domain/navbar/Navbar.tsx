import React from 'react';
import { ColorSchemeToggle } from './colorSchemeToggle/ColorSchemeToggle';

export const Navbar: React.FC = () => {
  return (
    <React.Fragment>
        <div>
          <p>Navbar</p>
        </div>
      <ColorSchemeToggle mode="dark"/>
    </React.Fragment>
  );
}
