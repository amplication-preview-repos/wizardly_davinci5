import { SortOrder } from "../../util/SortOrder";

export type CopOrderByInput = {
  createdAt?: SortOrder;
  displayName?: SortOrder;
  earnedRatings?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  phone?: SortOrder;
  totalRatings?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
