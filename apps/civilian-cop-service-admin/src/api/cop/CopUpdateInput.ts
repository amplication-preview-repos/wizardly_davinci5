import { DistressSignalUpdateManyWithoutCopsInput } from "./DistressSignalUpdateManyWithoutCopsInput";
import { InputJsonValue } from "../../types";
import { RatingUpdateManyWithoutCopsInput } from "./RatingUpdateManyWithoutCopsInput";

export type CopUpdateInput = {
  displayName?: string | null;
  distressSignals?: DistressSignalUpdateManyWithoutCopsInput;
  earnedRatings?: number | null;
  email?: string | null;
  location?: InputJsonValue;
  phone?: string | null;
  ratings?: RatingUpdateManyWithoutCopsInput;
  totalRatings?: number | null;
  userId?: string | null;
};
