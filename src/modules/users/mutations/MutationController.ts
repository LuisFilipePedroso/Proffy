import UsersRepository from '../repositories/UsersRepository';
import ICreateUserDTO from '../dtos/ICreateUserDTO';
import IUpdateUserDTO from '../dtos/IUpdateUserDTO';

class MutationController {

  async create(parent: any, data: { input: ICreateUserDTO }) {
    const usersRepository = new UsersRepository();

    return await usersRepository.create(data.input);
  }

  async update(parent: any, data: { input: IUpdateUserDTO }) {
    const usersRepository = new UsersRepository();

    let user = await usersRepository.findById(data.input.id);

    if (!user) {
      throw new Error('User does not exists');
    }

    await usersRepository.save(data.input);

    return user;
  }
}

export default MutationController;
