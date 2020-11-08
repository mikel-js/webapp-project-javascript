import { useState } from 'react';

function useTotalState(initialVal) {
  const [value, setValue] = useState(initialVal);

  const getTotal = (value) => {
    const totalState = value.reduce((accTotal, currTotal) => {
      if (initialVal === 'cases') {
        return accTotal + currTotal.confirmed;
      } else if (initialVal === 'recovered') {
        return accTotal + currTotal.recovered;
      } else if (initialVal === 'death') {
        return accTotal + currTotal.deaths;
      }
    }, 0);
    setValue(totalState);
  };
  return [value, getTotal];
}

export default useTotalState;
