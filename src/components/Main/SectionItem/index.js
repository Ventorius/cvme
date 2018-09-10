import React from 'react';
import PropTypes from 'prop-types';
import Editable from '../../Editable';
import './styles.scss';

const SectionItem = ({
  item: {
    name,
    years,
    position,
    description,
  },
}) => (
  <Editable>
    <div className="section--item">
      <div className="section--header">
        <h4>{name}</h4>
        <span>{years}</span>
      </div>
      <h5>{position}</h5>
      <div className="description">
        {description}
      </div>
    </div>
  </Editable>

);

SectionItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    years: PropTypes.string,
    position: PropTypes.string,
    description: PropTypes.string,
  }),
};

SectionItem.defaultProps = {
  item: {
    name: '',
    years: '',
    position: '',
    description: '',
  },

};

export default SectionItem;
