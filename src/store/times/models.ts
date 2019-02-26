
export interface ITimesData {
  description: string;
  duration: string;
  key: string;
  tags: string[];
  timeStart: string;
  timeEnd: string | null;
}

export interface ITimesState {
  data: ITimesData[];
  isLoading: boolean;
}
