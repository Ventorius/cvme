import React from 'react';
import PropTypes from 'prop-types';
import Name from './Name';
import Summary from './Summary';
import WorkHistory from './WorkHistory';
import Education from './Education';
import DottedButton from '../DottedButton';

import './styles.scss';

const Main = ({ openNewSectionModal }) => (
  <div className="main">
    <Name />
    <Summary />
    <WorkHistory />
    <Education />
    <DottedButton text="+ Add new section" onClick={openNewSectionModal} />
  </div>
);

Main.propTypes = {
  openNewSectionModal: PropTypes.func,
};

Main.defaultProps = {
  openNewSectionModal: () => {},
};

export default Main;
