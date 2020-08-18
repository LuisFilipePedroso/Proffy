export default `
  type Class {
    id: ID!
    subject: String!
    cost: Int!
    user: User!
    schedule: [ClassSchedule!]!
    status: Int
  }
`;
