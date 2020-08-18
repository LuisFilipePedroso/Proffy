import IUsersRepository from '../repositories/IUsersRepository';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';
import ICreateUserDTO from '../dtos/ICreateUserDTO';

import { injectable, inject } from 'tsyringe';

@injectable()
class CreateUserService {

  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider
  ) {}

  async execute(userData: ICreateUserDTO) {
    const emailExists = await this.usersRepository.findByEmail(userData.email);

    if(emailExists) {
      throw new Error('Email address already used.');
    }

    const hashedPassword = await this.hashProvider.generateHash(userData.password);

    return await this.usersRepository.create({
      ...userData,
      password: hashedPassword
    });
  }
}

export default CreateUserService;
