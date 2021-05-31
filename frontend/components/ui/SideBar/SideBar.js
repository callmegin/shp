import { useQuery } from '@apollo/client';
import { GET_CATEGORIES } from 'components/containers/Homepage/Homepage';
import Link from 'next/link';

import * as Styled from './styles';

const Sidebar = ({ categories, slug }) => {
  const { loading, data, error } = useQuery(GET_CATEGORIES);
  console.log(data);
  return (
    <Styled.SidebarContainer>
      <Styled.Sidebar>
        <Link href={`/products/all`}>
          <a>All Categories</a>
        </Link>

        <div>
          {data?.getCategories.map((category) => (
            <Link href={`/products/${category.category}`} key={category.id}>
              <a>
                <div>{category.category}</div>
              </a>
            </Link>
          ))}
        </div>
      </Styled.Sidebar>
    </Styled.SidebarContainer>
  );
};

export default Sidebar;
