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
    const { children, onClick } = this.props;
    const { hovered } = this.state;

    return (
      <div
        className={`editable ${hovered ? 'hovered' : ''}`}
        onMouseEnter={this.onHover}
        onMouseLeave={this.onHoverEnd}
        onClick={onClick}
        onKeyPress={onClick}
        role="button"
        tabIndex={0}
      >
        {children}
      </div>
    );
  }
}

Editable.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func,
};

Editable.defaultProps = {
  children: [],
  onClick: () => {},
};

export default Editable;
