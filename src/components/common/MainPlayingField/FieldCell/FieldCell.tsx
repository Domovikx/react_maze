import * as React from 'react';

export const FieldCell = ({ row, col }) => {
  // console.log('object :>> ', row, col);

  return <div key={row + col}>{`${row} ${col}`}</div>;
};
