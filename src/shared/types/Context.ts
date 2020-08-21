import DataLoader from 'dataloader';
import Class from '../../database/entities/Class';
import User from '../../database/entities/User';

type Context = {
  classLoader: DataLoader<string, Class[]>;
  userLoader: DataLoader<string, User[]>;
}

export default Context;
