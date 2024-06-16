import { CopWhereInput } from "./CopWhereInput";
import { CopOrderByInput } from "./CopOrderByInput";

export type CopFindManyArgs = {
  where?: CopWhereInput;
  orderBy?: Array<CopOrderByInput>;
  skip?: number;
  take?: number;
};
