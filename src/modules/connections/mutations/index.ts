import MutationController from './MutationController';

const MutationInputSDLType = `
  input CreateConnectionInput {
    user_id: String!
  }
`

const MutationTypesSDLType = `
  createConnection(input: CreateConnectionInput!): Connection!
`

export {
  MutationInputSDLType,
  MutationTypesSDLType,
  MutationController
}
