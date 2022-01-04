import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query GetUsers {
    users {
      data {
        id
        name
        username
        email
        phone
        website
      }
    }
  }
`;
