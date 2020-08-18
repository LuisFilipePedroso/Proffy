import IUsersRepository from '../repositories/IUsersRepository';
import IUpdateUserDTO from '../dtos/IUpdateUserDTO';

import { injectable, inject } from 'tsyringe';

interface IRequest extends IUpdateUserDTO {}

@injectable()
class UpdateUserService {

  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute(data: IRequest) {
    const user = await this.usersRepository.findById(data.id);

    if(!user) {
      throw new Error('User does not exists');
    }

    return await this.usersRepository.save(data);
  }
}

export default UpdateUserService;
