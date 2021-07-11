import React from "react";
import { render } from "react-dom";
import { ApolloProvider } from "react-apollo";

// import { HttpLink } from "apollo-link-http";
// import { InMemoryCache } from "apollo-cache-inmemory";
import { Meteor } from "meteor/meteor";
import { HttpLink, InMemoryCache } from "apollo-client-preset";
import ApolloClient from "apollo-client";

import App from "../../ui/App";

const httpLink = new HttpLink({
  uri: Meteor.absoluteUrl("graphql"),
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache,
});

const ApolloApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

Meteor.startup(() => {
  render(<ApolloApp />, document.getElementById("app"));
});
