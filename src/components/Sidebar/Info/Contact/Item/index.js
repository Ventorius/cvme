import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Item = ({ name, value }) => (
  <div className="contact--item">
    <span>{name}</span>
    <span>{value}</span>
  </div>
);

Item.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
};

Item.defaultProps = {
  name: '',
  value: '',
};

export default Item;
