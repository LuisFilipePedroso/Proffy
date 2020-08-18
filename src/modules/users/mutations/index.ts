import MutationController from './MutationController';

const MutationInputSDLType = `
  input CreateUserInput {
    name: String!
    email: String!
    password: String!
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
  updateUser(id: ID!, input: UpdateUserInput!): User!
  deleteUser(id: ID!): User!
`

export {
  MutationInputSDLType,
  MutationTypesSDLType,
  MutationController
}
