import React, { Fragment } from 'react';
import DottedButton from '../../DottedButton';
import './styles.scss';

const NewSection = () => (
  <Fragment>
    <header className="header">
      <div className="title">Add new section</div>
    </header>
    <div className="content">
      <div className="new--section">
        <DottedButton text="Summary" />
        <DottedButton text="Work history" />
        <DottedButton text="Education" />
      </div>
    </div>
  </Fragment>
);

export default NewSection;
