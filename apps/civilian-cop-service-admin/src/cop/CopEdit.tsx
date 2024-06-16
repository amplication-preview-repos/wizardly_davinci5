import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { DistressSignalTitle } from "../distressSignal/DistressSignalTitle";
import { RatingTitle } from "../rating/RatingTitle";

export const CopEdit = (props: EditProps): React.ReactElement => {
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
        <NumberInput step={1} label="earnedRatings" source="earnedRatings" />
        <TextInput label="email" source="email" type="email" />
        <div />
        <TextInput label="phone" source="phone" />
        <ReferenceArrayInput
          source="ratings"
          reference="Rating"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RatingTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="totalRatings" source="totalRatings" />
        <TextInput label="userId" source="userId" />
      </SimpleForm>
    </Edit>
  );
};
