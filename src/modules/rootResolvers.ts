import { UserMutationController, UserQueryController } from './users';

const userMutationController = new UserMutationController();
const userQueryController = new UserQueryController();

export default {
  Query: {
    findUsers: userQueryController.find,
  },
  Mutation: {
    createUser: userMutationController.create,
  }
}
