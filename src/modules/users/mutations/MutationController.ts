import ICreateUserDTO from '../dtos/ICreateUserDTO';
import IUpdateUserDTO from '../dtos/IUpdateUserDTO';

import { container } from 'tsyringe';

import CreateUserService from '../services/CreateUserService';
import UpdateUserService from '../services/UpdateUserService';
import DeleteUserService from '../services/DeleteUserService';

class MutationController {

  async create(parent: any, data: { input: ICreateUserDTO }) {
    const createUserService = container.resolve(CreateUserService);

    return await createUserService.execute(data.input);
  }

  async update(parent: any, data: { id: string, input: IUpdateUserDTO }) {
    const updateUserService = container.resolve(UpdateUserService);

    const partialUser = Object.assign(data.input, {
      id: data.id
    })

    return await updateUserService.execute(partialUser);
  }

  async destroy(parent: any, data: { id: string }) {
    const deleteUserService = container.resolve(DeleteUserService);

    return await deleteUserService.execute({ id: data.id });
  }
}

export default MutationController;
