import * as React from "react";
import { Redirect } from 'react-router';
import Button from '@material-ui/core/Button';
import { ShowButton, TopToolbar, ListButton } from 'react-admin';
import { List, Datagrid, TextField, EmailField, TextInput, Edit, SimpleForm, Create, DeleteWithConfirmButton, Toolbar, SaveButton, DeleteButton, EditButton } from 'react-admin';
import { useHistory } from 'react-router-dom';
import { withRouter } from 'react-router';
import BackButton from './BackButton';
import validator from 'validator';

const validateUserCreation = (values) => {
  const errors = {};
  if (!values.name) {
      errors.name = ['Name is required'];
  }
  if (!values.email) {
      errors.email = ['Email is required'];
  } else if (validator.isEmail(values.email) === false ) {
    errors.email = ['Please type correct email.'];
  }
  return errors
};


const UserEditToolbar = props => (
    <Toolbar {...props} >
        <SaveButton />

    </Toolbar>
);

export const UserList = props => (
  <List {...props}>
      <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="name" />
          <TextField source="username" />
          <TextField source="address.city" />
          <EmailField source="email" />
          <EditButton />
          <DeleteButton mutationMode="optimistic" />
      </Datagrid>
  </List>
);

export const UserEdit = props => (
    
    <Edit {...props}>

        <SimpleForm validate={validateUserCreation} toolbar={<UserEditToolbar />}>
            <TextInput source="id" />
            <TextInput source="name" />
            <TextInput source="username" />
            <TextInput source="address.city" />
            <TextInput source="email" />
        <BackButton>Cancel</BackButton>
        </SimpleForm>
    </Edit>
    
);

export const UserCreate = props => (
  <Create {...props} >
      <SimpleForm validate={validateUserCreation} mutationMode="undoable">
          <TextInput source="id" />
          <TextInput source="name"  />
          <TextInput source="username" />
          <TextInput source="address.city" />
          <TextInput source="email" />
      </SimpleForm>
  </Create>
);