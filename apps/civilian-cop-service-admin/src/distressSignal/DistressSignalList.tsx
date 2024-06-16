import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CIVILIAN_TITLE_FIELD } from "../civilian/CivilianTitle";
import { COP_TITLE_FIELD } from "../cop/CopTitle";

export const DistressSignalList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"DistressSignals"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField
          label="Civilian"
          source="civilian.id"
          reference="Civilian"
        >
          <TextField source={CIVILIAN_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Cop" source="cop.id" reference="Cop">
          <TextField source={COP_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="location" source="location" />
        <TextField label="message" source="message" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
