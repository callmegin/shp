import { useEffect, useState } from 'react';
import Router from 'next/router';
import { useRouter } from 'next/router';

import Checkbox from 'components/ui/Checkbox';

import { addQueryParams, removeQueryParams } from 'lib/utility/resolveRouter';

import * as Styled from '../styles';

const Types = ({ typesData, slug }) => {
  const router = useRouter();
  const { query } = router;
  const { type: qType } = query;
  const [checkbox, setCheckbox] = useState();
  useEffect(() => {
    setCheckbox((prev) => {
      let obj = [];
      typesData.forEach((item) => {
        const isChecked = qType ? qType.includes(item.type) : false;
        obj = [
          ...obj,
          { id: item.id, ['type']: item.type, checked: isChecked },
        ];
      });
      return [...obj];
    });
  }, [typesData]);

  const isChecked = (id) => {
    const checked = checkbox.find((item) => item.id === id);
    return checked ? checked.checked : false;
  };

  const handleChange = (value, id) => {
    setCheckbox((prev) => {
      let prevCopy = prev;

      const index = Object.keys(prev).find((item) => {
        return prev[item].id === id;
      });
      const previousVal = prevCopy[index];
      const previousType = previousVal.type;

      previousVal.checked
        ? removeQueryParams(previousType, query)
        : addQueryParams({ type: previousType }, query);
      previousVal.checked = !previousVal.checked;
      return [...prevCopy];
    });
  };

  return (
    <Styled.ListWrapper justifyCenter customFlex>
      <Styled.TypesList>
        {checkbox &&
          typesData.map((type) => (
            <Styled.ListItem key={type.id} noHover>
              <Styled.ListTextWrapper row justifyBetween>
                <Checkbox
                  name={type.type}
                  text={type.type}
                  checked={isChecked(type.id)}
                  changed={() => handleChange(type.type, type.id)}
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
