import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: `${process.env.HYGRAPH}`,
  headers: {
    'Authorization': `Bearer ${process.env.HYGRAPH_KEY}`
  },
  cache: new InMemoryCache()
}); 