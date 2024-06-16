import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CopList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Cops"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="displayName" source="displayName" />
        <TextField label="earnedRatings" source="earnedRatings" />
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="location" source="location" />
        <TextField label="phone" source="phone" />
        <TextField label="totalRatings" source="totalRatings" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="userId" source="userId" />
      </Datagrid>
    </List>
  );
};
