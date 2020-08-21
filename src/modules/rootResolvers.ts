import { UserMutationController, UserQueryController } from './users';
import { ClassMutationController , ClassQueryController } from './classes';

const userMutationController = new UserMutationController();
const userQueryController = new UserQueryController();

const classMutationController = new ClassMutationController();
const classQueryController = new ClassQueryController();

const mock = {
  "id": "8d626d08-e562-4646-983d-7f3699455339",
  "name": "Luis Filipe Pedroso",
  "email": "luis_filipe42@outlook.com",
  "password": "$2a$08$Di7qZbgKjQrroTnnXXFYMuAH6CJCixcSdUYMphbM1dNuT7J8oAUTG",
  "bio": "Enthusiast of the best web & mobile development technologies.",
  "status": 0,
  "whatsapp": "47 9 9275-0068"
}

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
