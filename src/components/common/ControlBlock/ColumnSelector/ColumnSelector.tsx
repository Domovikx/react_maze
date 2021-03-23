import { TextField } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { setColumnsAction } from '../../../../store/controlBlock/controlBlock.actions';

const options = [
  {
    value: '3',
    label: '3',
  },
  {
    value: '4',
    label: '4',
  },
  {
    value: '5',
    label: '5',
  },
];

export const ColumnSelector = () => {
  const [value, setValue] = React.useState(options[0].value);
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    dispatch(setColumnsAction(event.target.value));
  };

  return (
    <TextField
      id="outlined-select-currency"
      select
      label="Columns"
      value={value}
      onChange={handleChange}
      helperText="Please select Columns"
      variant="outlined"
      size="small"
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};
