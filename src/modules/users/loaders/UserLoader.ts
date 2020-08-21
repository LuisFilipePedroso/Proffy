import DataLoader from 'dataloader';

import User from '../../../database/entities/User';
import UsersRepository from '../repositories/UsersRepository';

import Loader from '../../../shared/loader';

const userLoader = () => new DataLoader(((ids: ReadonlyArray<string>) => Loader<User>({ ids, Repository: UsersRepository })));

export default userLoader;
