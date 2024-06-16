import { Civilian as TCivilian } from "../api/civilian/Civilian";

export const CIVILIAN_TITLE_FIELD = "displayName";

export const CivilianTitle = (record: TCivilian): string => {
  return record.displayName?.toString() || String(record.id);
};
