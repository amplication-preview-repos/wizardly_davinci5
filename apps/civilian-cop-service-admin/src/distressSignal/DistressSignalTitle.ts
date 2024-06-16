import { DistressSignal as TDistressSignal } from "../api/distressSignal/DistressSignal";

export const DISTRESSSIGNAL_TITLE_FIELD = "id";

export const DistressSignalTitle = (record: TDistressSignal): string => {
  return record.id?.toString() || String(record.id);
};
