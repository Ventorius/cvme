import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import Contact from './Contact';
import Editable from '../../Editable';

import './styles.scss';

const Info = ({ openEditContactDataModal }) => (
  <div className="info">
    <Editable onClick={openEditContactDataModal}>
      <Title />
      <Contact />
    </Editable>
  </div>
);

Info.propTypes = {
  openEditContactDataModal: PropTypes.func,
};

Info.defaultProps = {
  openEditContactDataModal: () => {},
};

export default Info;
