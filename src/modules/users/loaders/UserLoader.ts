import DataLoader from 'dataloader';

import User from '../../../database/entities/User';
import UsersRepository from '../repositories/UsersRepository';

type BatchUser = (ids: ReadonlyArray<string>) => Promise<User[]>;

const batchUsers: BatchUser = async (ids) => {
  const usersRepository = new UsersRepository();
  const users = await usersRepository.findByIds(ids);

  const userMap: { [key: string]: User } = {};

  users?.forEach(user => {
    userMap[user.id] = user;
  })

  return ids.map(id => userMap[id]);
}

const userLoader = () => new DataLoader(batchUsers);

export default userLoader;
