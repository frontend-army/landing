import { toZonedTime } from "date-fns-tz";

type FeaTimezone = "AR" | "ES" | "CO";

const feaTimezoneToTimezoneMap: Record<FeaTimezone, string> = {
  AR: "America/Argentina/Buenos_Aires",
  ES: "Europe/Madrid",
  CO: "America/Bogota",
};

export const getTimezonedHour = (utcHour: number, timezone: FeaTimezone) => {
  const date = new Date().setUTCHours(utcHour);
  const zonedDate = toZonedTime(date, feaTimezoneToTimezoneMap[timezone]);
  return zonedDate.getHours();
};
