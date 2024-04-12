import { ObjectValues } from "@/utils/types/objectValues";
import styles from "./styles.module.css";

export const POSITIONS = {
  start: "start",
  center: "center",
  end: "end",
} as const;

export type Position = ObjectValues<typeof POSITIONS>;

export const classNameForPosition: Record<Position, string> = {
  start: styles.start,
  center: styles.center,
  end: styles.end,
};
