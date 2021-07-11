import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";

const typeDefs = `
type Query {
greet: String,
another: String,
}
`;

// resolvers will hit the database in the future for now just hard coded data
const resolvers = {
  Query: {
    greet() {
      return "hello from ghraphQL";
    },
    another() {
      return "this is another query";
    },
  },
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

createApolloServer({ schema });
