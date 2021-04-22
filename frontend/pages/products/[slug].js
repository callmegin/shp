import Products from 'components/containers/Products/Products';

const ProductsPage = ({ query }) => {
  console.log(query);
  return <Products />;
};

// export const getStaticPaths = async () => {};
// export const getStaticProps = async ({ params }) => {};

export default ProductsPage;
