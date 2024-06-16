import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { DistressSignalTitle } from "../distressSignal/DistressSignalTitle";
import { RatingTitle } from "../rating/RatingTitle";

export const CivilianEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="displayName" source="displayName" />
        <ReferenceArrayInput
          source="distressSignals"
          reference="DistressSignal"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DistressSignalTitle} />
        </ReferenceArrayInput>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="phone" source="phone" />
        <ReferenceArrayInput
          source="ratings"
          reference="Rating"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RatingTitle} />
        </ReferenceArrayInput>
        <TextInput label="userId" source="userId" />
      </SimpleForm>
    </Edit>
  );
};
