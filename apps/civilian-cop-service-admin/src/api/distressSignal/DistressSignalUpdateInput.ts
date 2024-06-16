import { CivilianWhereUniqueInput } from "../civilian/CivilianWhereUniqueInput";
import { CopWhereUniqueInput } from "../cop/CopWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type DistressSignalUpdateInput = {
  civilian?: CivilianWhereUniqueInput | null;
  cop?: CopWhereUniqueInput | null;
  location?: InputJsonValue;
  message?: string | null;
  status?: "Option1" | null;
};
