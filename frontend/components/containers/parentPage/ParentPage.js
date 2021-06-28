import Header from '../Header/Header';
import GlobalStyles from './globalStyles';
import * as Styled from './styles';

const ParentPage = ({ children, pageLoading }) => {
  return (
    <Styled.Parent alignCenter>
      <GlobalStyles />
      <Header />
      <Styled.ParentContainer alignCenter justifyCenter>
        {children}
      </Styled.ParentContainer>
      {pageLoading && <Styled.Placeholder />}
    </Styled.Parent>
  );
};

export default ParentPage;
