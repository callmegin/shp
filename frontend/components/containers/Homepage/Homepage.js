import { gql, useQuery, NetworkStatus } from '@apollo/client';
import { useRouter } from 'next/router';

import Section from './Section/Section';

import * as Styled from './styles';

export const GET_CATEGORY_IMAGES = gql`
  query getImagesByName($fileName: String!) {
    getImagesByName(fileName: $fileName) {
      id
      secure_url
      original_filename
    }
  }
`;
export const queryVariables = {
  fileName: 'main',
};

const Homepage = () => {
  const router = useRouter();
  const {
    error,
    data: { getImagesByName },
  } = useQuery(GET_CATEGORY_IMAGES, {
    variables: queryVariables,
  });

  /**
   * * Below seems to work
   *  ! IF USED, PLEASE READ BELOW
   * ! Need not forget to check for HEIGHT in return: return (height && (<>...</>))
   * ! Simply because on page load/refresh before getting clientHeight
   * ! actual height would be null and it can be noticed visually
   */
  // const [height, setHeight] = useState(null);
  // if (process.browser) {
  //   useEffect(() => setHeight(document.children[0].clientHeight), [
  //     document.children[0].clientHeight,
  //   ]);
  // }
  const handleClick = () => {
    console.log('SDSd');
    router.push('/products/watches');
  };
  console.log(error);

  const watch = getImagesByName.find((item) =>
    item.original_filename.includes('watches')
  );
  /**
  TODO: 
  * ! need to check parameters and prob adjust json to cloudinary
  * ! REASON : Need some 'tags' on images, so that i'd have more info and could use it for 'categoryTitle'
  * * https://cloudinary.com/documentation/image_upload_api_reference
  */

  return (
    <Styled.RootContainer>
      <Styled.GridRoot>
        <Section
          gridColumn={'span 2 / span 2 '}
          gridRow={'span 2 / span 2'}
          imageUrl={watch}
          categoryTitle={'Watches'}
          clicked={handleClick}
        ></Section>

        <Section
          gridColumn={'span 1 / span 1'}
          imageUrl={'/shoes.jpg'}
          delay={200}
          categoryTitle={'Shoes'}
        />

        <Section
          gridColumn={'2 / span 1'}
          delay={200}
          categoryTitle={'JUST BUY IT'}
        />

        <Section
          gridColumn={'span 2 / span 2'}
          imageUrl={'/blazers.jpg'}
          delay={400}
          categoryTitle={'Blazers'}
        />
      </Styled.GridRoot>
      <Styled.SomeContent />
    </Styled.RootContainer>
  );
};

export default Homepage;
