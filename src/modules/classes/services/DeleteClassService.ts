import { ClassStatus } from '../../../database/entities/Class';
import ClassesRepository from '../repositories/ClassesRepository';

interface IRequest {
  id: string;
}

class DeleteClassService {
  async execute({ id }: IRequest) {
    const classesRepository = new ClassesRepository();

    //verify if class exists
    let classExists = await classesRepository.findById(id);
    //
    if (!classExists) {
      throw new Error('Class does not exists');
    }

    classExists.status = ClassStatus.DELETED;

    return await classesRepository.save(classExists);
  }
}

export default DeleteClassService;
