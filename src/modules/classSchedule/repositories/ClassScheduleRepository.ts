import {getRepository, Repository} from 'typeorm';

import ClassSchedule from '../../../database/entities/ClassSchedule';
import IClassScheduleRepository from './IClassScheduleRepository';
import ICreateClassScheduleDTO from '../dtos/ICreateClassScheduleDTO';
import IUpdateClassScheduleDTO from '../dtos/IUpdateClassScheduleDTO';

class ClassScheduleRepository implements IClassScheduleRepository {
  private ormRepository: Repository<ClassSchedule>;

  constructor() {
    this.ormRepository = getRepository(ClassSchedule);
  }

  async findByClassId(classId: string): Promise<ClassSchedule | undefined> {
    return await this.ormRepository.findOne({
      relations: ['classes'],
      where: {
        class_id: classId
      }
    });
  }

  async create(data: ICreateClassScheduleDTO[]): Promise<ClassSchedule[]> {
    const schedule = this.ormRepository.create(data);

    await this.ormRepository.save(schedule);

    return schedule;
  }

  async save(data: IUpdateClassScheduleDTO[]): Promise<ClassSchedule[]> {
    return this.ormRepository.save(data);
  }
}

export default ClassScheduleRepository;
