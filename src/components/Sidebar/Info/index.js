import React from 'react';
import Title from './Title';
import Contact from './Contact';
import Editable from '../../Editable';

import './styles.scss';

const Info = () => (
  <div className="info">

    <Editable>
      <Title />
    </Editable>
    <Editable>
      <Contact />
    </Editable>
  </div>
);

export default Info;
