import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DistressSignalListRelationFilter } from "../distressSignal/DistressSignalListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { RatingListRelationFilter } from "../rating/RatingListRelationFilter";

export type CopWhereInput = {
  displayName?: StringNullableFilter;
  distressSignals?: DistressSignalListRelationFilter;
  earnedRatings?: IntNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  location?: JsonFilter;
  phone?: StringNullableFilter;
  ratings?: RatingListRelationFilter;
  totalRatings?: IntNullableFilter;
  userId?: StringNullableFilter;
};
