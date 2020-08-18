import ClassSchedule from '../../../database/entities/ClassSchedule';
import ICreateClassScheduleDTO from '../dtos/ICreateClassScheduleDTO';
import IUpdateClassScheduleDTO from '../dtos/IUpdateClassScheduleDTO';

export default interface IClassScheduleRepository {
  findByClassId(id: string): Promise<ClassSchedule | undefined>;
  create(data: ICreateClassScheduleDTO[]): Promise<ClassSchedule[]>;
  save(data: IUpdateClassScheduleDTO[]): Promise<ClassSchedule[]>;
}
