import { useEffect, useState } from 'react';
import * as Styled from './styles';

const FakeAd = ({ text }) => {
  const [index, setIndex] = useState(0);
  const [background, setBackground] = useState();
  const textArray = text.split('|');

  useEffect(() => {
    let timeout;
    if (index < textArray.length) {
      timeout = setTimeout(() => {
        setIndex((prev) => prev + 1);
        setBackground(`hsla(${~~(360 * Math.random())},70%,70%,0.8)`);
      }, 500);
    } else setIndex(0);
    return () => {
      clearTimeout(timeout);
    };
  }, [index]);

  return (
    <Styled.AdContainer justifyCenter alignCenter background={background}>
      <Styled.AdText index={index}>{textArray[index]}</Styled.AdText>
    </Styled.AdContainer>
  );
};

export default FakeAd;
