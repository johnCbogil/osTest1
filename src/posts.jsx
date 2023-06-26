// in src/posts.js
import * as React from "react";
// tslint:disable-next-line:no-var-requires
import {
  Datagrid,
  List,
  Filter,
  TextField,
  TextInput,
} from "react-admin";

const PostFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="title" alwaysOn />
  </Filter>
);

export const PostList = (props) => (
  <List {...props} >
    <Datagrid>
      <TextField source="title" />
    </Datagrid>
  </List>
);
