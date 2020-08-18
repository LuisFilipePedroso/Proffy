import { UserMutationController, UserQueryController } from './users';
import { ClassMutationController , ClassQueryController } from './classes';

const userMutationController = new UserMutationController();
const userQueryController = new UserQueryController();

const classMutationController = new ClassMutationController();
const classQueryController = new ClassQueryController();

export default {
  Query: {
    findAllUsers: userQueryController.find,
    findUserById: userQueryController.show,
    findAllClasses: classQueryController.find,
    findClassById: classQueryController.show,
  },
  Mutation: {
    createUser: userMutationController.create,
    updateUser: userMutationController.update,
    deleteUser: userMutationController.destroy,
    createClass: classMutationController.create,
    updateClass: classMutationController.update,
    deleteClass: classMutationController.destroy,
  }
}
