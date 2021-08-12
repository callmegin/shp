import { memo } from 'react';
import { useSidebarToggle } from 'lib/context/sidebarContext';

import * as Styled from './styles';
import Dropdown from 'components/ui/Dropdown';

import SvgButton from 'components/ui/SvgButton';
import SvgFilter from 'assets/Filter';

const ProductsTop = ({ handleSubmit }) => {
  const {
    state: { show },
    dispatch,
  } = useSidebarToggle();

  const sortOrderOptions = [
    {
      name: 'None',
      sortOrder: '',
    },
    {
      name: 'Price (Asc)',
      sortOrder: 'price-asc',
    },
    {
      name: 'Price (Desc)',
      sortOrder: 'price-desc',
    },
    {
      name: 'Name (Asc)',
      sortOrder: 'name-asc',
    },
    {
      name: 'Name (Desc)',
      sortOrder: 'name-desc',
    },
  ];

  const handleSidebarClick = () => {
    dispatch({ show: !show });
  };
  return (
    <Styled.TopContainer row justifyCenter>
      <Styled.TopWrapper row>
        <Styled.EmptySpace show={show} />
        <SvgButton
          Icon={SvgFilter}
          width={25}
          height={25}
          clicked={handleSidebarClick}
          openState={show}
        />
        <Dropdown
          name="Order"
          defaultValue={'none'}
          options={sortOrderOptions}
          handleSubmit1={handleSubmit}
          margin="auto"
        />
      </Styled.TopWrapper>
    </Styled.TopContainer>
  );
};

export default memo(ProductsTop);
