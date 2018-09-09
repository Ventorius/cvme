import React from 'react';
import Photo from './Photo';
import Info from './Info';
import './styles.scss';

const Sidebar = () => (
  <div className="sidebar">
    <Photo />
    <Info />
  </div>
);

export default Sidebar;
