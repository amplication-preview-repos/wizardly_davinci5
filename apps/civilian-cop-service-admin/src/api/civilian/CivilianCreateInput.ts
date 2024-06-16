import { DistressSignalCreateNestedManyWithoutCiviliansInput } from "./DistressSignalCreateNestedManyWithoutCiviliansInput";
import { RatingCreateNestedManyWithoutCiviliansInput } from "./RatingCreateNestedManyWithoutCiviliansInput";

export type CivilianCreateInput = {
  displayName?: string | null;
  distressSignals?: DistressSignalCreateNestedManyWithoutCiviliansInput;
  email?: string | null;
  phone?: string | null;
  ratings?: RatingCreateNestedManyWithoutCiviliansInput;
  userId?: string | null;
};
