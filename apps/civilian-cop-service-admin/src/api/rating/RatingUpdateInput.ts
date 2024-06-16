import { CivilianWhereUniqueInput } from "../civilian/CivilianWhereUniqueInput";
import { CopWhereUniqueInput } from "../cop/CopWhereUniqueInput";

export type RatingUpdateInput = {
  civilian?: CivilianWhereUniqueInput | null;
  comment?: string | null;
  cop?: CopWhereUniqueInput | null;
  ratingValue?: number | null;
};
