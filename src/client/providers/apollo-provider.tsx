"use client";

import { ApolloProvider } from "@apollo/client";
import { graphQLClient } from "@/client/graphql/client";

export function ApolloProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ApolloProvider client={graphQLClient}>{children}</ApolloProvider>;
}
