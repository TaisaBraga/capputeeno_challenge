import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'http://localhost:3333/?', // Substitua pela URL real do seu servidor GraphQL
  cache: new InMemoryCache(),
});