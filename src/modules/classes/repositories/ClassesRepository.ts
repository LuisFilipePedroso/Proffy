import { getRepository, Repository } from 'typeorm';

import Class from '../../../database/entities/Class';
import IClassesRepository from './IClassesRepository';
import ICreateClassDTO from '../dtos/ICreateClassDTO';
import IUpdateClassDTO from '../dtos/IUpdateClassDTO';

class ClassesRepository implements IClassesRepository {
  private ormRepository: Repository<Class>;

  constructor() {
    this.ormRepository = getRepository(Class);
  }

  public async find(): Promise<Class[]> {
    return await this.ormRepository.find({
      relations: ['schedule', 'user'],
      where: {
        status: 0
      }
    });
  }

  public async findById(id: string): Promise<Class | undefined> {
    try {
      return await this.ormRepository.findOne(id, {
        relations: ['schedule']
      });
    } catch (e) {
      throw new Error(e);
    }
  }

  public async findByIds(ids: ReadonlyArray<string>): Promise<Class[] | undefined> {
    try {
      return await this.ormRepository.findByIds(ids as string[], {
        relations: ['schedule']
      });
    } catch (e) {
      throw new Error(e);
    }
  }

  public async create(classData: ICreateClassDTO): Promise<Class> {
    const createdClass = this.ormRepository.create({
      subject: classData.subject,
      cost: classData.cost,
      user_id: classData.user_id,
    });

    await this.ormRepository.save(createdClass);

    return createdClass;
  }

  public async save(partialClass: IUpdateClassDTO): Promise<Class | undefined> {
    const storagedClass = await this.ormRepository.preload(partialClass);

    if (storagedClass) {
      return await this.ormRepository.save(storagedClass);
    }
  }
}

export default ClassesRepository;
