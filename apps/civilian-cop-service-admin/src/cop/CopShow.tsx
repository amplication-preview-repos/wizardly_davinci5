import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CIVILIAN_TITLE_FIELD } from "../civilian/CivilianTitle";
import { COP_TITLE_FIELD } from "./CopTitle";

export const CopShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="DistressSignal"
          target="copId"
          label="DistressSignals"
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
        </ReferenceManyField>
        <ReferenceManyField reference="Rating" target="copId" label="Ratings">
          <Datagrid rowClick="show">
            <ReferenceField
              label="Civilian"
              source="civilian.id"
              reference="Civilian"
            >
              <TextField source={CIVILIAN_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="comment" source="comment" />
            <ReferenceField label="Cop" source="cop.id" reference="Cop">
              <TextField source={COP_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="ratingValue" source="ratingValue" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
