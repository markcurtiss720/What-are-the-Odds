/* const typeDefs = `

type ExternalData {
        key: String
    }

type Query {
        externalData: [ExternalData]!
    }
`;

module.exports = typeDefs */

const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    favorites: [Favorite]
  }

  type ExternalData {
    key: String
  }

  type Favorite {
    _id: ID
    name: String
    eventName: String
    sportKey: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    favorites(username: String!): [Favorite]
    favorite(favoriteId: ID!): Favorite
    externalData: [ExternalData]!
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addFavorite(name: String!, eventName: String!, sportKey: String!, username: String!): Favorite
    removeFavorite(favoriteId: ID!): Favorite
  }
`;

module.exports = typeDefs;
