import QueryController from './QueryController';

const QuerySDLType = `
  findClasses: [Class!]!
  findClassById(id: ID!): Class!
`

export {
  QuerySDLType,
  QueryController
}
