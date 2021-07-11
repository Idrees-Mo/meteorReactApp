import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";

import ResolutionsSchema from "../../api/resolutions/Resolutions.graphql";

const testSchema = `
type Query {
greet: String,
another: String,
}`;

const typeDefs = [testSchema, ResolutionsSchema];

// resolvers will hit the database in the future for now just hard coded data
const resolvers = {
  Query: {
    greet() {
      return "it's me from graphQL";
    },
  },
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

createApolloServer({ schema });
