import { UsersQuerySDLType } from './users';
import { ClassesQuerySDLType } from './classes';
import { ConnectionQuerySDLType } from './connections';

export default `
  type Query {
    ${UsersQuerySDLType}  
    ${ClassesQuerySDLType}  
    ${ConnectionQuerySDLType}  
  }
`;
