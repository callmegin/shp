import Header from '../Header/Header';
import GlobalStyles from './globalStyles';
import * as Styled from './styles';

const ParentPage = ({ children }) => {
  return (
    <Styled.Parent alignCenter>
      <GlobalStyles />
      <Header />
      <Styled.ParentContainer> {children}</Styled.ParentContainer>
    </Styled.Parent>
  );
};

export default ParentPage;
