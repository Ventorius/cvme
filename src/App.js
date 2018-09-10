/* eslint-disable no-unused-vars */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from './state/User/actions';

import Content from './components/Content';
import Menu from './components/Menu';
import Editor from './views/Editor';
import Preview from './views/Preview';
import Modal from './components/Modal';
import Loader from './components/Loader';

import './App.scss';

class App extends Component {
  async componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    await this.props.getUser();
  }

  render() {
    const { profile, isLoading } = this.props;

    return (
      <div className="container">
        {isLoading ? <Loader /> : (
          <Router>
            <Fragment>
              <Menu />
              <Content>
                <Route path="/" exact component={() => <Editor profile={profile} />} />
                <Route path="/preview" component={() => <Preview />} />
                <Content />
              </Content>
              <Modal />
            </Fragment>
          </Router>
        )}
      </div>
    );
  }
}

App.propTypes = {
  getUser: PropTypes.func,
  profile: PropTypes.shape({
    id: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    jobTitle: PropTypes.string,
    contact: PropTypes.object,
    skills: PropTypes.array,
  }),
  isLoading: PropTypes.bool,
};

App.defaultProps = {
  getUser: () => {},
  profile: {},
  isLoading: true,
};

function mapStateToProps({ user }) {
  return { user: user.profile, isLoading: user.isLoading };
}

export default connect(mapStateToProps, { getUser })(App);
