import { gql } from 'graphql-tag';

export const typeDefs = gql`
  type User {
    id: ID!
    userName: String!
    email: String!
    firstName: String!
    lastName: String!
    role: String!
  }

  type Query {
    getUser(id: ID!): User
    getUsers: [User!]!
  }

  type Mutation {
    createUser(
      userName: String!
      email: String!
      firstName: String!
      lastName: String!
      password: String!
      role: String!
    ): User!
  }
`;
