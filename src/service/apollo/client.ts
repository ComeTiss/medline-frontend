import ApolloClient from "apollo-boost";

const URL_DEV = "http://localhost:4000/graphql";
const URL_PROD = "https://medline-backend.herokuapp.com/graphql";
const ENV = process.env.NODE_ENV;

export const client = new ApolloClient({
  uri: ENV === "production" ? URL_PROD : URL_DEV
});
