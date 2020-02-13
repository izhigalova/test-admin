// in src/App.js
import React from "react";
import jsonServerProvider from "ra-data-json-server";

import { Admin, Resource, ListGuesser } from "react-admin";
import { UserList } from "./users";

const dataProvider = jsonServerProvider("http://jsonplaceholder.typicode.com");
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posts" list={ListGuesser} />
    <Resource name="users" list={UserList} />
  </Admin>
);

export default App;
