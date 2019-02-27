
export interface ITimesData {
  description: string;
  duration: string;
  key: string;
  tags: string[];
  timeStart: Date | string;
  timeEnd: Date | string;
}

export interface ITimesState {
  data: ITimesData[];
  isLoading: boolean;
}
