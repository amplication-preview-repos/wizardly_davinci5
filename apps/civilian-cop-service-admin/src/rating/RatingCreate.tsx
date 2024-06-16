import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { CivilianTitle } from "../civilian/CivilianTitle";
import { CopTitle } from "../cop/CopTitle";

export const RatingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="civilian.id"
          reference="Civilian"
          label="Civilian"
        >
          <SelectInput optionText={CivilianTitle} />
        </ReferenceInput>
        <TextInput label="comment" multiline source="comment" />
        <ReferenceInput source="cop.id" reference="Cop" label="Cop">
          <SelectInput optionText={CopTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="ratingValue" source="ratingValue" />
      </SimpleForm>
    </Create>
  );
};
