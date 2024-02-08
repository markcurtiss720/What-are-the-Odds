const typeDefs = `
type User {
        _id: ID
        username: string
        email: String
        password: String
        favorites: [Favorite]!
    }
    
type Favorite {
    _id: ID
    name: String
    }
    

type Auth {
    token: ID
    user: User
    }


    type Query {
        users: [User]
        user(username: String!): User
        favorites(username: String): [Favorite]
        favorite(thoughtId: ID!): Favorite
    }
    

type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    addFavorite(name: String): favorite
    removeFavorite(_id: ID!): favorite
    login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs