import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import './styles.scss';

const Contact = ({
  contact: {
    phone,
    email,
    website,
    location,
  },
}) => (
  <div className="contact">
    <Item name="Phone" value={phone} />
    <Item name="Email" value={email} />
    <Item name="Website" value={website} />
    <Item name="Location" value={location} />
  </div>
);

Contact.propTypes = {
  contact: PropTypes.shape({
    phone: PropTypes.string,
    email: PropTypes.string,
    website: PropTypes.string,
    location: PropTypes.string,
  }),
};

Contact.defaultProps = {
  contact: {},
};

export default Contact;
