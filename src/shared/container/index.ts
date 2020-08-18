import { container } from 'tsyringe';

import '../../modules/users/providers';
// import './providers';

import UsersRepository from '../../modules/users/repositories/UsersRepository';
import IUsersRepository from '../../modules/users/repositories/IUsersRepository';

import ClassesRepository from '../../modules/classes/repositories/ClassesRepository';
import IClassesRepository from '../../modules/classes/repositories/IClassesRepository';

import ClassScheduleRepository from '../../modules/classSchedule/repositories/ClassScheduleRepository';
import IClassScheduleRepository from '../../modules/classSchedule/repositories/IClassScheduleRepository';

// import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';
// import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IClassesRepository>(
  'ClassesRepository',
  ClassesRepository,
);

container.registerSingleton<IClassScheduleRepository>(
  'ClassScheduleRepository',
  ClassScheduleRepository,
);

// container.registerSingleton<IUserTokensRepository>(
//   'UserTokens',
//   UserTokensRepository,
// );
