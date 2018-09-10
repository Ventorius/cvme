import React from 'react';
import Photo from './Photo';
import Info from './Info';
import Skills from './Skills';

import './styles.scss';

const Sidebar = () => (
  <div className="sidebar">
    <div className="inner">
      <Photo />
      <Info />
      <Skills />
    </div>

  </div>
);

export default Sidebar;
