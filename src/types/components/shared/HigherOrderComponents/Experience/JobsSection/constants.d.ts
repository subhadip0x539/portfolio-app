import { Dayjs } from "dayjs";

interface IJob {
  organization: string;
  tenure: {
    start: Dayjs;
    end: Dayjs;
  };
  address: string;
  positions: {
    name: string;
    tenure: {
      start: Dayjs;
      end: Dayjs;
    };
    description: string;
    type: string;
  }[];
}

export { IJob };
