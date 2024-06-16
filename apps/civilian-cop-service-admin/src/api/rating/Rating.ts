import { Civilian } from "../civilian/Civilian";
import { Cop } from "../cop/Cop";

export type Rating = {
  civilian?: Civilian | null;
  comment: string | null;
  cop?: Cop | null;
  createdAt: Date;
  id: string;
  ratingValue: number | null;
  updatedAt: Date;
};
