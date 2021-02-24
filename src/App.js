import * as React from "react";
import {useEffect, useState} from 'react';
import { Admin, Resource} from 'react-admin';
import { UserList, UserEdit, UserCreate } from './users';
import axios from "axios";
//import jsonServerProvider from 'ra-data-json-server';
import fakeDataProvider from 'ra-data-fakerest'; // fa
import MyLayout from './MyLayout';



// Jako że API jest read only i słabo było widać jak te dane aktualizuja sie lokalnie używając podstawowego providera zdecydowałem się sfechować te dane i manipulowac nimi na fake providerze.


const App = () => {
   const [provider, setProvider] = useState();
   //const dataProvider = jsonServerProvider('https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb');
   useEffect(async () => {
      const result = await axios(
        'https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data',
      );
   setProvider(fakeDataProvider({
      users : result.data
   }))
    }, []);

if (!provider) { return null }

return (
   <Admin layout={MyLayout} dataProvider={provider}>
        <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} />
   </Admin>  )
   
};


export default App;