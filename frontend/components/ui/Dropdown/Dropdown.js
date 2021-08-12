import router, { useRouter } from 'next/router';
import { addQueryParams } from 'lib/utility/resolveRouter';
import * as Styled from './styles';

const Dropdown = ({ options, name, defaultValue, margin }) => {
  const router = useRouter();
  const { query } = router;

  //! THIS IS THE WAY
  const handleSubmit = (e) => {
    const value = e.target.value;
    addQueryParams({ sort: value }, query);
  };
  return (
    <Styled.ListContainer margin={margin}>
      <Styled.Label>Order by:</Styled.Label>
      <Styled.Select onChange={handleSubmit} defaultValue={defaultValue}>
        {/* <option value={name} disabled="disabled">
          {name}
        </option> */}
        {options.map((value) => (
          <Styled.Option value={value.sortOrder} key={value.name}>
            {value.name}
          </Styled.Option>
        ))}
      </Styled.Select>
    </Styled.ListContainer>
  );
};

export default Dropdown;
