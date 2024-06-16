import { DistressSignalCreateNestedManyWithoutCopsInput } from "./DistressSignalCreateNestedManyWithoutCopsInput";
import { InputJsonValue } from "../../types";
import { RatingCreateNestedManyWithoutCopsInput } from "./RatingCreateNestedManyWithoutCopsInput";

export type CopCreateInput = {
  displayName?: string | null;
  distressSignals?: DistressSignalCreateNestedManyWithoutCopsInput;
  earnedRatings?: number | null;
  email?: string | null;
  location?: InputJsonValue;
  phone?: string | null;
  ratings?: RatingCreateNestedManyWithoutCopsInput;
  totalRatings?: number | null;
  userId?: string | null;
};
