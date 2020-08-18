import QueryController from './QueryController';

const QuerySDLType = `
  findAllClasses: [Class!]!
  findClassById(id: ID!): Class!
`

export {
  QuerySDLType,
  QueryController
}
