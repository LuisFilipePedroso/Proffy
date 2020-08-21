import {getRepository, Repository} from 'typeorm';

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
    return await this.ormRepository.find({
      where: {
        status: 0
      }
    });
  }

  public async findById(id: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne(id);

    return user;
  }

  public async findByIds(ids: ReadonlyArray<string>): Promise<User[] | undefined> {
    const users = await this.ormRepository.findByIds(ids as string[]);

    return users;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where: {
        email,
      },
    });

    return user;
  }

  public async create(userData: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create(userData);

    await this.ormRepository.save(user);

    return user;
  }

  public async save(partialUser: IUpdateUserDTO): Promise<User | undefined> {
    // Preload is going to get a partial entity and assign with the original entity;
    const user = await this.ormRepository.preload(partialUser);

    if (user) {
      const updatedUser =  await this.ormRepository.save(user);
      return updatedUser;
    }
  }
}

export default UsersRepository;
