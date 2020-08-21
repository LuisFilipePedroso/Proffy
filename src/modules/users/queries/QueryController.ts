import UsersRepository from '../repositories/UsersRepository';

import { Args, Context } from '../../../shared/types';

class QueryController {

  async find() {
    const usersRepository = new UsersRepository();

    const users = await usersRepository.find();

    return users;
  }

  async show(parent: any, { id }: Args, context: Context) {
    const cachedUser = await context.userLoader.load(id);

    if (cachedUser) {
      return cachedUser;
    }

    const usersRepository = new UsersRepository();

    const user = usersRepository.findById(id);

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }
}

export default QueryController;
