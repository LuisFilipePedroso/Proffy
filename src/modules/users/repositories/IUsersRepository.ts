import ICreateUserDTO from '../dtos/ICreateUserDTO';
import IUpdateUserDTO from '../dtos/IUpdateUserDTO';
import User from '../../../database/entities/User';

export default interface IUsersRepository {
  find(): Promise<User[]>;
  findById(id: string): Promise<User | undefined>;
  findByIds(id: ReadonlyArray<string>): Promise<User[] | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  create(data: ICreateUserDTO): Promise<User | undefined>;
  save(user: IUpdateUserDTO): Promise<User | undefined>;
}
