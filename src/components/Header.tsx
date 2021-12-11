import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Products</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </nav>
    </div>
  );
};
