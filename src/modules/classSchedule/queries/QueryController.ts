import ClassesRepository from "modules/classes/repositories/ClassesRepository";

class QueryController {

  async show(parent: any, id: string) {
    const classesRepository = new ClassesRepository();

    const classExists = classesRepository.findById(id);

    if (!classExists) {
      throw new Error('Class not found');
    }

    return classExists;
  }
}

export default QueryController;
