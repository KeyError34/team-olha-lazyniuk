import { gql } from 'graphql-tag';

export const typeDefs = gql`
  type User {
    id: ID!
    userName: String!
    password: String!
    phonNumber: String
    email: String!
    firstName: String!
    lastName: String!
    role: String
  }

  type Query {
    getUsers: [User!]!
    getUser(id: ID!): User
  }

  type Mutation {
    createUser(
      userName: String!
      password: String!
      phonNumber: String
      email: String!
      firstName: String!
      lastName: String!
      
    ): User!
  }
`;
