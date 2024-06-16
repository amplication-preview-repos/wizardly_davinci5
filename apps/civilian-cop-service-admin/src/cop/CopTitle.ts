import { Cop as TCop } from "../api/cop/Cop";

export const COP_TITLE_FIELD = "displayName";

export const CopTitle = (record: TCop): string => {
  return record.displayName?.toString() || String(record.id);
};
