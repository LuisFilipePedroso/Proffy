import MutationController from './MutationController';

const MutationInputSDLType = `
  input CreateClassScheduleInput {
    week_day: Int!
    from: Int!
    to: Int!
  }
  
  input UpdateClassScheduleInput {
    week_day: Int
    from: Int
    to: Int
  }
`

const MutationTypesSDLType = `
  createClassSchedule(input: CreateClassScheduleInput!): ClassSchedule!
  updateClassSchedule(input: UpdateClassScheduleInput!): ClassSchedule!
`

export {
  MutationInputSDLType,
  MutationTypesSDLType,
  MutationController
}
