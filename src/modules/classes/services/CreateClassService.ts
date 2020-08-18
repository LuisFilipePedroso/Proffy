import IClassesRepository from '../repositories/IClassesRepository';
import ClassScheduleRepository from '../../classSchedule/repositories/ClassScheduleRepository';
import IClassScheduleRepository from '../../classSchedule/repositories/IClassScheduleRepository';
import convertHoursToMinutes from '../../../utils/convertHoursToMinutes';

import {injectable, inject} from 'tsyringe';

interface ISchedule {
  class_id: string;
  week_day: number;
  from: string;
  to: string;
}

export interface IRequest {
  subject: string;
  cost: number;
  user_id: string;
  schedule: ISchedule[];
}

@injectable()
class UpdateClassService {

  constructor(
    @inject('UsersRepository')
    private classRepository: IClassesRepository,

    @inject('ClassScheduleRepository')
    private classScheduleRepository: IClassScheduleRepository
  ) {
  }

  async execute({subject, cost, user_id, schedule: requestSchedule}: IRequest) {
    //TODO create transaction;
    const createdClass = await this.classRepository.create({subject, cost, user_id});

    //Create Schedule
    const classSchedule = requestSchedule.map((schedule) => {
      return {
        ...schedule,
        class_id: createdClass.id,
        from: convertHoursToMinutes(schedule.from),
        to: convertHoursToMinutes(schedule.to),
      }
    })

    const createdSchedule = await this.classScheduleRepository.create(classSchedule);

    return {
      ...createdClass,
      schedule: createdSchedule
    }
  }
}

export default UpdateClassService;
