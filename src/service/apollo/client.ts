import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";

const URL_DEV = "http://localhost:4000/graphql";
const URL_PROD = "https://medline-backend.herokuapp.com/graphql";
const target_uri = process.env.NODE_ENV === "production" ? URL_PROD : URL_DEV;

const httpLink = createHttpLink({
  uri: target_uri,
  // credentials: "include", // sends cookies
  fetchOptions: {
    mode: "cors"
  }
});

const authLink = (accessToken: string) => {
  return setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: accessToken ? `Bearer ${accessToken}` : ""
      }
    };
  });
};

export const getApolloClient = (accessToken: string) => {
  return new ApolloClient({
    link: authLink(accessToken).concat(httpLink),
    cache: new InMemoryCache()
  });
};
