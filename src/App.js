import * as React from "react";
import { Admin, Resource} from 'react-admin';
import { UserList, UserEdit, UserCreate } from './users';

import jsonServerProvider from 'ra-data-json-server';


const dataProvider = jsonServerProvider('https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb');
const App = () => (
   <Admin dataProvider={dataProvider}>
        <Resource name="data" list={UserList} edit={UserEdit} create={UserCreate} />
   </Admin>  

);


export default App;