import React from 'react';
import Item from './Item';
import './styles.scss';

const Contact = () => (
  <div className="contact">
    <Item name="Phone" value="791 190 024" />
    <Item name="Email" value="s.basznianin@outlook.com" />
    <Item name="Website" value="www.something.pl" />
    <Item name="Location" value="Warsaw, Poland" />
  </div>
);

export default Contact;
