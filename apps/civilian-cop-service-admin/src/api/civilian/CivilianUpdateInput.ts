import { DistressSignalUpdateManyWithoutCiviliansInput } from "./DistressSignalUpdateManyWithoutCiviliansInput";
import { RatingUpdateManyWithoutCiviliansInput } from "./RatingUpdateManyWithoutCiviliansInput";

export type CivilianUpdateInput = {
  displayName?: string | null;
  distressSignals?: DistressSignalUpdateManyWithoutCiviliansInput;
  email?: string | null;
  phone?: string | null;
  ratings?: RatingUpdateManyWithoutCiviliansInput;
  userId?: string | null;
};
