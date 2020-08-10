import { UsersQuerySDLType } from './users';
import { ClassesQuerySDLType } from './classes';
import { ClassScheduleQuerySDLType } from './classSchedule';
import { ConnectionQuerySDLType } from './connections';

export default `
  type Query {
    ${UsersQuerySDLType}  
    ${ClassesQuerySDLType}  
    ${ClassScheduleQuerySDLType}  
    ${ConnectionQuerySDLType}  
  }
`;
