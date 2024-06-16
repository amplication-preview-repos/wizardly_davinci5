import { Civilian } from "../civilian/Civilian";
import { Cop } from "../cop/Cop";
import { JsonValue } from "type-fest";

export type DistressSignal = {
  civilian?: Civilian | null;
  cop?: Cop | null;
  createdAt: Date;
  id: string;
  location: JsonValue;
  message: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
