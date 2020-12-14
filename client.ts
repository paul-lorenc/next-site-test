import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
export const Client = new ApolloClient({
  uri: "https://api-us-east-1.graphcms.com/v2/ckinhecvrl1be01z4hkdjdb7q/master",
  cache: new InMemoryCache(),
});
