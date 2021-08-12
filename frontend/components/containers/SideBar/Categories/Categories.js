import Link from 'next/link';
import * as Styled from '../styles';

const Categories = ({ data, slug }) => {
  const isActive = (selected) => {
    return slug === selected;
  };

  //TODO: style this shit
  return (
    <Styled.ListWrapper>
      <Styled.CatList>
        <Link href={`/products/all`}>
          <Styled.ListItemMain isActive={isActive('')}>
            All Categories
          </Styled.ListItemMain>
        </Link>
        {data?.map((category) => (
          <Link
            href={{ pathname: `/products/${category.category}` }}
            key={category.id}
          >
            <Styled.ListItem isActive={isActive(category.category)}>
              {category.category}
            </Styled.ListItem>
          </Link>
        ))}
      </Styled.CatList>
    </Styled.ListWrapper>
  );
};

export default Categories;
