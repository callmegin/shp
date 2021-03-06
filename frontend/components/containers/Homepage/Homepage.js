import { gql } from '@apollo/client';
import { useRouter } from 'next/router';
import { useRouterScroll } from '@moxy/next-router-scroll';
import { useState, useEffect } from 'react';

import Section from './Section/Section';

import * as Styled from './styles';

export const GET_CATEGORIES = gql`
  query getCategories {
    getCategories {
      id
      category
      image {
        id
        secure_url
      }
    }
  }
`;

const Homepage = ({ response }) => {
  const router = useRouter();

  // const [selected, setSelected] = useState();

  const [data, setData] = useState();
  const { watches, shoes, blazers } = data || {};

  useEffect(() => {
    response &&
      response.data.getCategories.map((key) => {
        setData((prevData) => ({
          ...prevData,
          [key.category]: key,
        }));
      });
  }, [response]);

  const handleClick = (category) => {
    router.push(`/products/${category}`);
  };

  useEffect(() => {
    // Prefetching [slug] page
    data &&
      Object.keys(data).map((item) => {
        router.prefetch(`/products/${item}`);
      });
  }, [data]);

  return (
    <Styled.RootContainer alignCenter>
      {data && (
        <>
          <Styled.GridRoot>
            <Section
              gridColumn={'span 2 / span 2 '}
              gridRow={'span 2 / span 2'}
              imageUrl={watches.image.secure_url}
              categoryTitle={watches.category}
              clicked={() => handleClick(watches.category)}
            ></Section>

            <Section
              gridColumn={'span 1 / span 1'}
              imageUrl={shoes.image.secure_url}
              delay={200}
              categoryTitle={shoes.category}
              clicked={() => handleClick(shoes.category)}
            />

            <Section
              gridColumn={'2 / span 1'}
              delay={500}
              categoryTitle={'JUST BUY IT'}
            />

            <Section
              gridColumn={'span 2 / span 2'}
              imageUrl={blazers.image.secure_url}
              delay={300}
              categoryTitle={blazers.category}
              clicked={() => handleClick(blazers.category)}
            />
          </Styled.GridRoot>
          <Styled.SomeContent />
        </>
      )}
    </Styled.RootContainer>
  );
};

export default Homepage;
