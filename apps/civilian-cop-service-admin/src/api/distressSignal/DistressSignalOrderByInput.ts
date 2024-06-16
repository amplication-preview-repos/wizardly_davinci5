import { SortOrder } from "../../util/SortOrder";

export type DistressSignalOrderByInput = {
  civilianId?: SortOrder;
  copId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  message?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
