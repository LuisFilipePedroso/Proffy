import { WeekDay } from '../../../database/entities/ClassSchedule';

export default interface IUpdateClassScheduleDTO {
  class_id?: string;
  week_day?: WeekDay;
  from?: number;
  to?: number;
}
