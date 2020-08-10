import QueryController from './QueryController';

const QuerySDLType = `
  findScheduleByClassId(id: ID!): ClassSchedule!
`

export {
  QuerySDLType,
  QueryController
}
