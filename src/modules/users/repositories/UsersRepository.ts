import { getRepository, Repository } from 'typeorm';

import User from '../../../database/entities/User';
import IUserRepository from './IUsersRepository';
import ICreateUserDTO from '../dtos/ICreateUserDTO';
import IUpdateUserDTO from '../dtos/IUpdateUserDTO';

class UsersRepository implements IUserRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async find(): Promise<User[]> {
    return await this.ormRepository.find();
  }

  public async findById(id: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne(id, );

    return user;
  }

  public async create(userData: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create(userData);

    await this.ormRepository.save(user);

    return user;
  }

  public async save(user: IUpdateUserDTO): Promise<User> {
    return this.ormRepository.save(user);
  }
}

export default UsersRepository;
