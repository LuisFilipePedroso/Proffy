import QueryController from './QueryController';

const QuerySDLType = `
  findUsers: [User!]!
  findUserById(id: ID!): User!
`

export {
  QuerySDLType,
  QueryController
}
