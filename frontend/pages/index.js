import { GET_CATEGORIES } from 'components/containers/Homepage/Homepage';
import { initializeApollo, addApolloState } from 'lib/apolloClient';

export { default } from 'components/containers/Homepage/Homepage';

export const getStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_CATEGORIES,
  });

  return addApolloState(apolloClient, {
    props: {},
  });
};
