import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DistressSignalListRelationFilter } from "../distressSignal/DistressSignalListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { RatingListRelationFilter } from "../rating/RatingListRelationFilter";

export type CivilianWhereInput = {
  displayName?: StringNullableFilter;
  distressSignals?: DistressSignalListRelationFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  phone?: StringNullableFilter;
  ratings?: RatingListRelationFilter;
  userId?: StringNullableFilter;
};
