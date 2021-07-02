import Checkbox from 'components/ui/Checkbox';
import { useState } from 'react';

import * as Styled from '../styles';

const Types = ({ typesData }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    const target = e.target;
    setChecked({ [target.name]: target.value });
  };

  return (
    <Styled.ListWrapper justifyCenter customFlex>
      <Styled.TypesList>
        {typesData.map((type) => (
          <Styled.ListItem key={type.id}>
            <Styled.ListTextWrapper row justifyBetween>
              <Checkbox
                name={type.type}
                text={type.type}
                checked={checked[type]}
                changed={handleChange}
              />
              <span>{type.productsCount}</span>
            </Styled.ListTextWrapper>
          </Styled.ListItem>
        ))}
      </Styled.TypesList>
    </Styled.ListWrapper>
  );
};

export default Types;
