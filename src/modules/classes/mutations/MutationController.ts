import CreateClassService, { IRequest as ICreateClassRequestParams } from '../services/CreateClassService';
import UpdateClassService, { IRequest as IUpdateClassRequestParams } from '../services/UpdateClassService';
import DeleteClassService from '../services/DeleteClassService';

import { Context } from '../../../shared/types';

import { container } from 'tsyringe';

class MutationController {

  async create(parent: any, data: { input: ICreateClassRequestParams }, context: Context) {
    const createClassService = container.resolve(CreateClassService);

    await context.classLoader.clearAll();

    return await createClassService.execute(data.input);
  }

  async update(parent: any, data: { id: string, input: IUpdateClassRequestParams }, context: Context) {
    const updateClassService = container.resolve(UpdateClassService);

    await context.classLoader.clear(data.id);

    const request = Object.assign(data.input, {
      id: data.id
    });

    return await updateClassService.execute(request);
  }

  async destroy(parent: any, data: { id: string }, context: Context) {
    const deleteClassService = container.resolve(DeleteClassService);

    await context.classLoader.clear(data.id);

    return await deleteClassService.execute({ id: data.id });
  }
}

export default MutationController;
