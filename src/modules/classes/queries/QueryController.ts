import ClassesRepository from '../repositories/ClassesRepository';

type Args = {
  id: string;
}

class QueryController {

  async find() {
    const classesRepository = new ClassesRepository();

    const classes = await classesRepository.find();

    return classes;
  }

  async show(parent: any, { id }: Args) {
    const classesRepository = new ClassesRepository();

    const classExists = classesRepository.findById(id);

    if (!classExists) {
      throw new Error('Class not found');
    }

    return classExists;
  }
}

export default QueryController;
