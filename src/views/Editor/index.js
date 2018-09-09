import React from 'react';
import Main from '../../components/Main';
import Sidebar from '../../components/Sidebar';

import './styles.scss';

const Editor = () => (
  <div className="editor">
    <Sidebar />
    <Main />
  </div>
);

export default Editor;
