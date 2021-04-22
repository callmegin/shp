export { default } from 'components/containers/Homepage/Homepage';

import {
  GET_CATEGORY_IMAGES,
  queryVariables,
} from 'components/containers/Homepage/Homepage';
import { initializeApollo, addApolloState } from 'lib/apolloClient';

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_CATEGORY_IMAGES,
    variables: queryVariables,
  });

  return addApolloState(apolloClient, {
    props: {},
  });
}
