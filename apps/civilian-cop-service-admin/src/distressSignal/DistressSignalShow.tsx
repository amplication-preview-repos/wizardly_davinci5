import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { CIVILIAN_TITLE_FIELD } from "../civilian/CivilianTitle";
import { COP_TITLE_FIELD } from "../cop/CopTitle";

export const DistressSignalShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
