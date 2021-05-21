import Header from '../Header/Header';
import GlobalStyles from './globalStyles';
import { CloudinaryContext } from 'cloudinary-react';
import * as Styled from './styles';

const ParentPage = ({ children, pageLoading }) => {
  return (
    <Styled.Parent alignCenter>
      <GlobalStyles />
      <Header />
      <Styled.ParentContainer> {children}</Styled.ParentContainer>
      {pageLoading && <Styled.Placeholder />}
    </Styled.Parent>
  );
};

export default ParentPage;
