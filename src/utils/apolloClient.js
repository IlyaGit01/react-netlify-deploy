import { PrismicLink } from 'apollo-link-prismic';
import { InMemoryCache, ApolloClient } from '@apollo/client';

const apolloClient = new ApolloClient({
  link: PrismicLink({
    uri: 'https://iwannatest.cdn.prismic.io/graphql',
    accessToken: 'MC5ZQXAtenhFQUFDa0FTUGJl.77-9Ze-_ve-_vSXvv73vv73vv70YLhtU77-977-977-977-9Me-_vTjvv73vv73vv70jNO-_vUkg77-977-977-9H3Q',
    repositoryName: 'iwannatest',
  }),
  cache: new InMemoryCache(),
});

export default apolloClient;
