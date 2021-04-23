import { useRouter } from 'next/router';

const Products = ({ category }) => {
  const router = useRouter();

  //below gives me the slug (i.e. "slug: watches")
  console.log(router.query);

  return (
    <>
      <p>{category}</p>
      <h2>This is products page</h2>
    </>
  );
};

export default Products;
