import Test, { GET_ALL_PRODUCTS } from '../components/Test';
import { initializeApollo, addApolloState } from '../lib/apolloClient';
const test = ({ pageLoading }) => {
  console.log(pageLoading);
  return (
    <div>
      <h1>Testing page</h1>
      <Test />
    </div>
  );
};

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({ query: GET_ALL_PRODUCTS });

  return addApolloState(apolloClient, {
    props: {},
  });
}

export default test;
