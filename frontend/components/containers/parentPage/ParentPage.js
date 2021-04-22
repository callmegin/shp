import Header from '../Header/Header';
import GlobalStyles from './globalStyles';
import * as Styled from './styles';

const ParentPage = ({ children }) => {
  return (
    <Styled.Parent alignCenter>
      <GlobalStyles />
      <Header />
      {children}
    </Styled.Parent>
  );
};

export default ParentPage;
