import DataLoader from 'dataloader';

import Class from '../../../database/entities/Class';
import ClassesRepository from '../repositories/ClassesRepository';

import Loader from '../../../shared/loader';

const classLoader = () => new DataLoader(((ids: ReadonlyArray<string>) => Loader<Class>({ ids, Repository: ClassesRepository })));

export default classLoader;
