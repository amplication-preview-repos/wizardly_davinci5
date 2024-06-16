import { DistressSignalWhereInput } from "./DistressSignalWhereInput";
import { DistressSignalOrderByInput } from "./DistressSignalOrderByInput";

export type DistressSignalFindManyArgs = {
  where?: DistressSignalWhereInput;
  orderBy?: Array<DistressSignalOrderByInput>;
  skip?: number;
  take?: number;
};
