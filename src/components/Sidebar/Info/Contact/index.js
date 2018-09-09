import React from 'react';
import Item from './Item';
import './styles.scss';

const Contact = () => (
  <div className="contact">
    <Item name="Telefon" value="791 190 024" />
    <Item name="Email" value="s.basznianin@outlook.com" />
    <Item name="Strona" value="www.something.pl" />
  </div>
);

export default Contact;
