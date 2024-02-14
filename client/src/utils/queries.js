import { gql } from "@apollo/client";

export const GET_USER = gql`
    query GetUser($username: String!) {
        user(username: $username) {
            favorites {
                name
                eventName
                sportKey
                _id
            }
        }
    }
`;