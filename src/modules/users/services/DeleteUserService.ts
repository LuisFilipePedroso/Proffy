import IUsersRepository from '../repositories/IUsersRepository';
import { UserStatus } from '../../../database/entities/User';
import { injectable, inject } from 'tsyringe';

interface IRequest {
  id: string;
}

@injectable()
class DeleteUserService {

  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute(data: IRequest) {
    let user = await this.usersRepository.findById(data.id);

    if (!user) {
      throw new Error('User does not exists');
    }

    user.status = UserStatus.DELETED;

    return await this.usersRepository.save(user);
  }
}

export default DeleteUserService;
