import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { CivilianTitle } from "../civilian/CivilianTitle";
import { CopTitle } from "../cop/CopTitle";

export const DistressSignalEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="civilian.id"
          reference="Civilian"
          label="Civilian"
        >
          <SelectInput optionText={CivilianTitle} />
        </ReferenceInput>
        <ReferenceInput source="cop.id" reference="Cop" label="Cop">
          <SelectInput optionText={CopTitle} />
        </ReferenceInput>
        <div />
        <TextInput label="message" multiline source="message" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
