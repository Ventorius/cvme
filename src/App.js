import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { getUser } from './api/user';

import Content from './components/Content';
import Menu from './components/Menu';
import Editor from './views/Editor';
import Preview from './views/Preview';

import './App.scss';


class App extends Component {
  async componentDidMount() {
    await getUser();
  }

  render() {
    return (
      <div className="container">
        <Router>
          <Fragment>
            <Menu />
            <Content>
              <Route path="/" exact component={Editor} />
              <Route path="/preview" component={Preview} />
              <Content />
            </Content>
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
