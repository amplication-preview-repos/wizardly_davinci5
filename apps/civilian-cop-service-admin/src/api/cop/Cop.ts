import { DistressSignal } from "../distressSignal/DistressSignal";
import { JsonValue } from "type-fest";
import { Rating } from "../rating/Rating";

export type Cop = {
  createdAt: Date;
  displayName: string | null;
  distressSignals?: Array<DistressSignal>;
  earnedRatings: number | null;
  email: string | null;
  id: string;
  location: JsonValue;
  phone: string | null;
  ratings?: Array<Rating>;
  totalRatings: number | null;
  updatedAt: Date;
  userId: string | null;
};
