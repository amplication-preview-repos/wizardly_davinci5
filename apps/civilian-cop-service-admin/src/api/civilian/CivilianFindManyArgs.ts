import { CivilianWhereInput } from "./CivilianWhereInput";
import { CivilianOrderByInput } from "./CivilianOrderByInput";

export type CivilianFindManyArgs = {
  where?: CivilianWhereInput;
  orderBy?: Array<CivilianOrderByInput>;
  skip?: number;
  take?: number;
};
