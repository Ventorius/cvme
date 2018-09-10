import React, { Fragment } from 'react';
import Input from '../../Input';
import Label from '../../Label';

const EditContactData = () => (
  <Fragment>
    <header className="header">
      <div className="title">Edit contact information</div>
    </header>
    <div className="content">

      <Label value="Title" />
      <Input />

      <Label value="Phone" />
      <Input />

      <Label value="Email" />
      <Input />

      <Label value="Website" />
      <Input />

      <Label value="Location" />
      <Input />

    </div>
  </Fragment>
);

export default EditContactData;
