import DataLoader from 'dataloader';

import User from '../../../database/entities/User';
import UsersRepository from '../repositories/UsersRepository';

type Args = {
  id: string;
}

type Context = {
  userLoader: DataLoader<string, User[]>
}

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
