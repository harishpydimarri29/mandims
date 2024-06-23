import { createClient } from '@/utils/supabase/client';
import { ApolloClient, InMemoryCache, gql, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_SUPABASE_URL! + "/graphql/v1",
})

const authLink = setContext(async (_, { headers }) => {
  const supabase = createClient()
  const token = (await supabase.auth.getSession()).data.session?.access_token

  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '',
      apiKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    },
  }
})

export const graphQLClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});