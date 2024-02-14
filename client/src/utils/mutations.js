import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String! 
    $email: String! 
    $password: String!
    ) {
    addUser(
      username: $username 
      email: $email 
      password: $password
      ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_FAVORITE= gql`
  mutation addFavorite($name: String!, $eventName: String!, $sportKey: String!, $username: String!) {
    addFavorite(name: $name, eventName: $eventName, sportKey: $sportKey, username: $username) {
      _id
      name
      eventName
      sportKey
    }
  }
`;

export const REMOVE_FAVORITE = gql`
mutation removeFavorite($favoriteId: ID!) {
  removeFavorite(favoriteId: $favoriteId) {
    name
    _id
  }
}
`