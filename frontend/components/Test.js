import { gql, useQuery, NetworkStatus } from '@apollo/client';
import Image from 'next/image';

export const GET_CATEGORIES = gql`
  query getCategories {
    getCategories {
      id
      category
      types {
        id
        type
      }
      image {
        id
        secure_url
      }
    }
  }
`;
const test = () => {
  const { error, loading, data } = useQuery(GET_CATEGORIES);
  console.log(error);
  console.log(data);

  return (
    <>
      <h1>Test page</h1>
      {data ? (
        <div>CONTENT GOES HERE</div>
      ) : (
        <div>noooo contentiiinoooo !!!!!!!</div>
      )}
    </>
  );
};

export default test;
