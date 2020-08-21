import ICreateClassDTO from '../dtos/ICreateClassDTO';
import Class from '../../../database/entities/Class';

export default interface IClassesRepository {
  find(): Promise<Class[]>;
  findById(id: string): Promise<Class | undefined>;
  findByIds(ids: ReadonlyArray<string>): Promise<Class[] | undefined>;
  create(data: ICreateClassDTO): Promise<Class>;
  save(model: Class): Promise<Class | undefined>;
}
