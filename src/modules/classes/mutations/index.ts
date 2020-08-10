import MutationController from './MutationController';

const MutationInputSDLType = `
  input CreateClassInput {
    subject: String!
    cost: String!
    user_id: String!
  }
  
  input UpdateClassInput {
    subject: String
    cost: String
    user_id: String
  }
`

const MutationTypesSDLType = `
  createClass(input: CreateClassInput!): Class!
  updateClass(input: UpdateClassInput!): Class!
`

export {
  MutationInputSDLType,
  MutationTypesSDLType,
  MutationController
}
