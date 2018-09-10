import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Content from './components/Content';
import Menu from './components/Menu';
import Editor from './views/Editor';
import Preview from './views/Preview';
import Modal from './components/Modal';

import './App.scss';

const App = () => (
  <div className="container">
    <Router>
      <Fragment>
        <Menu />
        <Content>
          <Route path="/" exact component={Editor} />
          <Route path="/preview" component={Preview} />
          <Content />
        </Content>
        <Modal />
      </Fragment>
    </Router>
  </div>
);

export default App;
