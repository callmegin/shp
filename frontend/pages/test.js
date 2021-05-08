import Testfrom from '../components/Test';

const test = ({ pageLoading }) => {
  console.log(pageLoading);
  return (
    <div>
      <h1>Testing page</h1>
      <Testfrom />
    </div>
  );
};

export default test;
