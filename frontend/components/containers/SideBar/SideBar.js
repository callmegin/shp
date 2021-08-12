import React from 'react';
import dynamic from 'next/dynamic';

import { useWindowResize } from 'lib/hooks/useWindowResize';

import Categories from './Categories';
import Types from './Types';
import * as Styled from './styles';

const Mobile = dynamic(() => import('./Mobile'), { ssr: false });
const Desktop = dynamic(() => import('./Desktop'), { ssr: false });

const Sidebar = ({ slug, categoriesData, loading, networkStatus }) => {
  const [width] = useWindowResize();
  const breakpoint = 740;

  let typesData = [];
  if (slug) {
    const requiredCategory = categoriesData.find(
      (category) => category.category === slug
    );
    typesData = requiredCategory.types;
  } else {
    categoriesData.map((category) =>
      category.types.map((type) => (typesData = [...typesData, type]))
    );
  }
  const sidebar = (
    <>
      <Categories data={categoriesData} slug={slug} />
      <Types typesData={typesData} slug={slug} />
    </>
  );
  return (
    <>
      {width > breakpoint ? (
        <Desktop>{sidebar}</Desktop>
      ) : (
        <Mobile>{sidebar}</Mobile>
      )}
    </>
  );
};

export default React.memo(Sidebar);
