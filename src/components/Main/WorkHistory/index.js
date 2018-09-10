import React from 'react';
import Section from '../Section';
import SectionItem from '../SectionItem';

const WorkHistory = () => (

  <Section header="Work history">
    <SectionItem item={{
      name: 'Konmex',
      years: '2015-2017',
      position: 'Software Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores enim expedita ipsa minus modi'
      + ' nulla quas quis quisquam quod quos, recusandae, reprehenderit rerum sapiente, sequi sint suscipit tempore temporibus!',
    }}
    />
    <SectionItem item={{
      name: 'Konmex',
      years: '2015-2017',
      position: 'Software Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores enim expedita ipsa minus modi'
      + ' nulla quas quis quisquam quod quos, recusandae, reprehenderit rerum sapiente, sequi sint suscipit tempore temporibus!',
    }}
    />
  </Section>

);

export default WorkHistory;
