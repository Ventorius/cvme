import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class Editable extends Component {
  state = {
    hovered: false,
  }

  onHover = () => this.setState(() => ({ hovered: true }))

  onHoverEnd = () => this.setState(() => ({ hovered: false }))

  render() {
    const { children } = this.props;
    const { hovered } = this.state;

    return (
      <div
        className={`editable ${hovered ? 'hovered' : ''}`}
        onMouseEnter={this.onHover}
        onMouseLeave={this.onHoverEnd}
      >
        {children}
      </div>
    );
  }
}

Editable.propTypes = {
  children: PropTypes.arrayOf(PropTypes.string),
};

Editable.defaultProps = {
  children: [],
};

export default Editable;
