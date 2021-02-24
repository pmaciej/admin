import * as React from "react";
import { List, Datagrid, TextField, EmailField, TextInput, Edit, SimpleForm, Create, Toolbar, SaveButton, DeleteButton, EditButton } from 'react-admin';
import BackButton from './BackButton';
import validator from 'validator';

const validateUserCreation = ({name, email}) => {

  const errors = {};
  if (!name) {
      errors.name = ['Name is required'];
  }
  if (!email) {
      errors.email = ['Email is required'];
  } else if (validator.isEmail(email) === false ) {
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
  <List {...props} bulkActionButtons={false}>
      <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="name" />
          <TextField source="username" />
          <TextField label="City" source="address.city" />
          <EmailField source="email" />
          <EditButton />
          <DeleteButton mutationMode="optimistic" />
      </Datagrid>
  </List>
);

export const UserEdit = props => (
    
    <Edit  {...props}>

        <SimpleForm  validate={validateUserCreation} toolbar={<UserEditToolbar />}>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <TextInput source="username" />
            <TextInput label="City" source="address.city" />
            <TextInput source="email" />
            <BackButton>Cancel</BackButton>
        </SimpleForm>
    </Edit>
    
);

export const UserCreate = props => (
  <Create {...props} >
      <SimpleForm redirect={() =>'/users'} validate={validateUserCreation} >
          <TextInput source="name"  />
          <TextInput source="username" />
          <TextInput label="City" source="address.city" />
          <TextInput source="email" />
          <BackButton>Cancel</BackButton>
      </SimpleForm>
  </Create>
);