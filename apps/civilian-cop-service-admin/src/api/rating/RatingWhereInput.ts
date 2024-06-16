import { CivilianWhereUniqueInput } from "../civilian/CivilianWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CopWhereUniqueInput } from "../cop/CopWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type RatingWhereInput = {
  civilian?: CivilianWhereUniqueInput;
  comment?: StringNullableFilter;
  cop?: CopWhereUniqueInput;
  id?: StringFilter;
  ratingValue?: IntNullableFilter;
};
