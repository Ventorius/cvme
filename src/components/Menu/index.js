import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

const Menu = () => (
  <nav className="menu">
    <div className="menu-list">
      <NavLink exact activeClassName="active" className="menu-list-item first" to="/">Editor</NavLink>
      <NavLink activeClassName="active" className="menu-list-item" to="/preview">Preview</NavLink>
    </div>

  </nav>
);

export default Menu;
