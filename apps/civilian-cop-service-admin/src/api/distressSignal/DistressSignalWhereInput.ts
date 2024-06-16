import { CivilianWhereUniqueInput } from "../civilian/CivilianWhereUniqueInput";
import { CopWhereUniqueInput } from "../cop/CopWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type DistressSignalWhereInput = {
  civilian?: CivilianWhereUniqueInput;
  cop?: CopWhereUniqueInput;
  id?: StringFilter;
  location?: JsonFilter;
  message?: StringNullableFilter;
  status?: "Option1";
};
