import ClassSchema from './schema';
import { MutationInputSDLType as ClassMutationInput, MutationTypesSDLType as ClassesMutationType, MutationController as ClassMutationController } from './mutations';
import { QuerySDLType as ClassesQuerySDLType, QueryController as ClassQueryController } from './queries';
import { classLoader } from './loaders';

export {
  ClassSchema,
  ClassMutationInput,
  ClassesMutationType,
  ClassesQuerySDLType,
  ClassMutationController,
  ClassQueryController,
  classLoader
};
