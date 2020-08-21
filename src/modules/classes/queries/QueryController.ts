import ClassesRepository from '../repositories/ClassesRepository';

import { Args, Context } from '../../../shared/types';

class QueryController {

  async find() {
    const classesRepository = new ClassesRepository();

    const classes = await classesRepository.find();

    return classes;
  }

  async show(parent: any, { id }: Args, context: Context) {
    const cachedClass = await context.classLoader.load(id);

    if (cachedClass) {
      return cachedClass;
    }

    const classesRepository = new ClassesRepository();

    const classExists = classesRepository.findById(id);

    if (!classExists) {
      throw new Error('Class not found');
    }

    return classExists;
  }
}

export default QueryController;
