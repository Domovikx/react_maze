import * as React from 'react';
import { TextField } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import { setStepsAction } from '../../../../store/controlBlock/controlBlock.actions';
import { useDispatch } from 'react-redux';

const options = [
  {
    value: '5',
    label: '5',
  },
  {
    value: '10',
    label: '10',
  },
  {
    value: '15',
    label: '15',
  },
];

export const StepSelector = () => {
  const [value, setValue] = React.useState(options[1].value);
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    dispatch(setStepsAction(event.target.value));
  };

  return (
    <TextField
      id="outlined-select-currency"
      select
      label="Steps"
      value={value}
      onChange={handleChange}
      helperText="Please select Steps"
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
