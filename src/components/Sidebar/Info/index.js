import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import Contact from './Contact';
import Editable from '../../Editable';

import './styles.scss';

const Info = ({
  openEditContactDataModal, jobTitle, contact,
}) => (
  <div className="info">
    <Editable onClick={openEditContactDataModal}>
      <Title jobTitle={jobTitle} />
      <Contact contact={contact} />
    </Editable>
  </div>
);

Info.propTypes = {
  openEditContactDataModal: PropTypes.func,
  jobTitle: PropTypes.string,
  contact: PropTypes.shape({
    phone: PropTypes.string,
    email: PropTypes.string,
    website: PropTypes.string,
    location: PropTypes.string,
  }),
};

Info.defaultProps = {
  openEditContactDataModal: () => {},
  contact: {},
  jobTitle: '',
};

export default Info;
