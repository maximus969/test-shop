import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

export const Header = () => {
  return (
    <div className={s.header}>
      <nav>
        <ul className={s.linkList}>
          <li>
            <NavLink to="/" exact className={s.linkListItem} activeClassName={s.linkListActiveItem}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" exact className={s.linkListItem} activeClassName={s.linkListActiveItem}>
              Cart
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
