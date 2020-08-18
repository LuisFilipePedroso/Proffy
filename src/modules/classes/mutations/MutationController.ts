import CreateClassService, { IRequest as ICreateClassRequestParams } from '../services/CreateClassService';
import UpdateClassService, { IRequest as IUpdateClassRequestParams } from '../services/UpdateClassService';
import DeleteClassService from '../services/DeleteClassService';

import { container } from 'tsyringe';

class MutationController {

  async create(parent: any, data: { input: ICreateClassRequestParams }) {
    const createClassService = container.resolve(CreateClassService);

    return await createClassService.execute(data.input);
  }

  async update(parent: any, data: { id: string, input: IUpdateClassRequestParams }) {
    const updateClassService = container.resolve(UpdateClassService);

    const request = Object.assign(data.input, {
      id: data.id
    });

    return await updateClassService.execute(request);
  }

  async destroy(parent: any, data: { id: string }) {
    const deleteClassService = container.resolve(DeleteClassService);

    return await deleteClassService.execute({ id: data.id });
  }
}

export default MutationController;
