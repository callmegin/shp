import { GET_CATEGORIES } from 'components/containers/Homepage/Homepage';
import { initializeApollo, addApolloState } from 'lib/apollo/apolloClient';

import Homepage from 'components/containers/Homepage/Homepage';

export const getStaticProps = async () => {
  const apolloClient = initializeApollo();

  const response = await apolloClient.query({
    query: GET_CATEGORIES,
  });

  return addApolloState(apolloClient, {
    props: { response },
  });
};

const HomePage = ({ response }) => {
  return <Homepage response={response} />;
};

export default HomePage;
