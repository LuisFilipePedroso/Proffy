import ClassesRepository from '../repositories/ClassesRepository';
import ClassScheduleRepository from '../../classSchedule/repositories/ClassScheduleRepository';
import convertHoursToMinutes from '../../../utils/convertHoursToMinutes';

interface ISchedule {
  id: string;
  class_id: string;
  week_day: number;
  from: string;
  to: string;
}

export interface IRequest {
  id: string;
  subject: string;
  cost: number;
  user_id: string;
  schedule?: ISchedule[];
}

class UpdateClassService {
  async execute(data: IRequest) {
    const classesRepository = new ClassesRepository();
    const classScheduleRepository = new ClassScheduleRepository();

    //verify if class exists
    let classExists = await classesRepository.findById(data.id);

    if (!classExists) {
      throw new Error('Class does not exists');
    }

    const updatedClass = await classesRepository.save(data);

    // verify if has schedule
    if(data.schedule) {
      let classSchedule = data.schedule.map((schedule) => {
        return {
          ...schedule,
          from: convertHoursToMinutes(schedule.from),
          to: convertHoursToMinutes(schedule.to),
        }
      })

      await classScheduleRepository.save(classSchedule);

      return {
        ...updatedClass,
        schedule: classSchedule
      }
    }

    return updatedClass;
  }
}

export default UpdateClassService;
