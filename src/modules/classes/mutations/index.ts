import MutationController from './MutationController';

const MutationInputSDLType = `
  input CreateClassScheduleInput {
    week_day: Int!
    from: String!
    to: String!
  }
  
  input UpdateClassScheduleInput {
    week_day: Int
    from: String
    to: String
  }

  input CreateClassInput {
    subject: String!
    cost: Int!
    user_id: String!
    schedule: [CreateClassScheduleInput!]!
  }
  
  input UpdateClassInput {
    subject: String
    cost: Int
    user_id: String
    schedule: [UpdateClassScheduleInput]
  }
`

const MutationTypesSDLType = `
  createClass(input: CreateClassInput!): Class!
  updateClass(id: ID!, input: UpdateClassInput!): Class!
  deleteClass(id: ID!): Class!
`

export {
  MutationInputSDLType,
  MutationTypesSDLType,
  MutationController
}
