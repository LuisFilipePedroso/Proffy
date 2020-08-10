import {GraphQLServer} from 'graphql-yoga';
// import './database';

import {UserSchema} from './modules/users';
import {ClassSchema} from './modules/classes';
import {ClassScheduleSchema} from './modules/classSchedule';
import {ConnectionSchema} from './modules/connections';
import Mutations from './modules/rootMutation';
import Queries from './modules/rootQuery';
import Resolvers from './modules/rootResolvers';

const typeDefs = `${UserSchema} ${ClassSchema} ${ClassScheduleSchema} ${ConnectionSchema} ${Mutations} ${Queries}`;

const server = new GraphQLServer({
  typeDefs: typeDefs,
  resolvers: Resolvers
});

server.start({
  port: 3333
}, () => console.log('Server is running on port 3333'))

