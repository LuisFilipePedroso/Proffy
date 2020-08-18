import { WeekDay } from '../../../database/entities/ClassSchedule';

export default interface ICreateClassScheduleDTO {
  class_id: string;
  week_day: WeekDay;
  from: number;
  to: number;
}
