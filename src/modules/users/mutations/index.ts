import MutationController from './MutationController';

const MutationInputSDLType = `
  input CreateUserInput {
    name: String!
    avatar: String!
    whatsapp: String!
    bio: String!  
  }
  
  input UpdateUserInput {
    name: String
    avatar: String
    whatsapp: String
    bio: String  
  }
`

const MutationTypesSDLType = `
  createUser(input: CreateUserInput!): User
  updateUser(input: UpdateUserInput!): User!
`

export {
  MutationInputSDLType,
  MutationTypesSDLType,
  MutationController
}
