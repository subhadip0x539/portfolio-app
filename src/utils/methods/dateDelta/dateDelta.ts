import { Dayjs } from "dayjs";
import { dayjs } from "../../modules";

const dateDelta = (start: Dayjs, end: Dayjs): string => {
  const diff = end.diff(start, "month");
  const years = dayjs.duration(diff, "month").years();
  const months = dayjs.duration(diff, "month").months();

  const _years = years > 0 ? `${years} yr` : "";
  const _months = months > 0 ? `${months} mos` : "";

  return [_years, _months].join(" ");
};

export { dateDelta };
