import QueryController from './QueryController';

const QuerySDLType = `
  findAllUsers: [User!]!
  findUserById(id: ID!): User!
`

export {
  QuerySDLType,
  QueryController
}
