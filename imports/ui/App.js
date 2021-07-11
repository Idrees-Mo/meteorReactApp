import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const App = ({ data }) => {
  return <h1>Hello, {data.greet}</h1>;
};

const query = gql`
  {
    greet
  }
`;

export default graphql(query)(App);
