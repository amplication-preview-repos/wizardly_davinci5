import { DistressSignal } from "../distressSignal/DistressSignal";
import { Rating } from "../rating/Rating";

export type Civilian = {
  createdAt: Date;
  displayName: string | null;
  distressSignals?: Array<DistressSignal>;
  email: string | null;
  id: string;
  phone: string | null;
  ratings?: Array<Rating>;
  updatedAt: Date;
  userId: string | null;
};
