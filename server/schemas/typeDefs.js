const typeDefs = `
    type ExternalData {
        key: String
    }

    type Query {
        externalData: [ExternalData]!
    }
`

module.exports = typeDefs;