import React from 'react';
import Name from './Name';
// import Summary from './Summary';
// import WorkHistory from './WorkHistory';
// import Education from './Education';
import Section from './Section';
import Button from '../Button';

import './styles.scss';

const Main = () => (
  <div className="main">
    <Name />
    <Section header="Summary" />
    <Section header="Work history" />
    <Section header="Education" />
    <Button text="+ Add new section" />
  </div>
);

export default Main;
