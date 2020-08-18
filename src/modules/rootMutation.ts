import { UserMutationInput, UsersMutationType } from './users';
import { ClassMutationInput, ClassesMutationType } from './classes';
import { ConnectionMutationInput, ConnectionMutationType } from './connections';

export default `
  ${UserMutationInput}
  ${ClassMutationInput}
  ${ConnectionMutationInput}

  type Mutation {
    ${UsersMutationType}  
    ${ClassesMutationType}   
    ${ConnectionMutationType}  
  }
`;
