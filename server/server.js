const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require('./models/User');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const PORT = 3000;
const { typeDefs, resolvers } = require('./schemas');

// Import exampleRoute
// const exampleRoute = require('./api/exampleRoute');

const app = express();
app.use(express.json());
app.use(cors());

// mongoose.connect("mongodb://127.0.0.1:27017/Odds");

// // // Set up routes
// // app.use('/api', exampleRoute); // Mount exampleRoute under /api

// app.post('/login', (req, res) => {
//     const { email, password } = req.body;
//     UserModel.findOne({ email: email })
//     .then(user => {
//         if (user) {
//             if (user.password === password) {
//                 res.json("Success");
//             } else {
//                 res.json("Incorrect password");
//             }
//         } else {
//             res.json("No record existed");
//         }
//     })
//     .catch(err => {
//         console.error(err);
//         res.status(500).json({ error: "Internal server error" });
//     });
// });

// app.post('/signup', (req, res) => {
//     UserModel.create(req.body)
//     .then(employees => res.json(employees))
//     .catch(err => {
//         console.error(err);
//         res.status(500).json({ error: "Internal server error" });
//     });
// });

// app.listen(3002, () => {
//     console.log("server is running");
// });

const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  
  // Create a new instance of an Apollo server with the GraphQL schema
  const startApolloServer = async () => {
    await server.start();
  
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
  
    app.use('/graphql', expressMiddleware(server));
  
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  };
  
  // Call the async function to start the server
  startApolloServer();