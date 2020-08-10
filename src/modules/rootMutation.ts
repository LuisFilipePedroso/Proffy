import { UserMutationInput, UsersMutationType } from './users';
import { ClassMutationInput, ClassesMutationType } from './classes';
import { ClassScheduleMutationInput, ClassScheduleMutationType } from './classSchedule';
import { ConnectionMutationInput, ConnectionMutationType } from './connections';

export default `
  ${UserMutationInput}
  ${ClassMutationInput}
  ${ClassScheduleMutationInput}
  ${ConnectionMutationInput}

  type Mutation {
    ${UsersMutationType}  
    ${ClassesMutationType}  
    ${ClassScheduleMutationType}  
    ${ConnectionMutationType}  
  }
`;
