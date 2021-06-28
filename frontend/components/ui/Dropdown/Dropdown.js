import { useState } from 'react';
import * as Styled from './styles';

const Dropdown = ({ options, handleSubmit, name, margin }) => {
  return (
    <Styled.ListContainer margin={margin}>
      <Styled.Select onChange={handleSubmit} defaultValue={name}>
        <option value={name} disabled="disabled">
          {name}
        </option>
        {options.map((value) => (
          <Styled.Option key={value.name}>{value.name}</Styled.Option>
        ))}
      </Styled.Select>
    </Styled.ListContainer>
  );
};

export default Dropdown;
