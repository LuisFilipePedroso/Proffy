import MutationController from './MutationController';

const MutationInputSDLType = `
  input CreateConnectionInput {
    user_id: String!
  }
`

const MutationTypesSDLType = `
  createConnection(input: CreateClassScheduleInput!): Connection!
`

export {
  MutationInputSDLType,
  MutationTypesSDLType,
  MutationController
}
