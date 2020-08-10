import QueryController from './QueryController';

const QuerySDLType = `
  getConnectionByUserId(id: ID!): Connection!
`

export {
  QuerySDLType,
  QueryController
}
