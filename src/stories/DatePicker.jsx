import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import PropTypes from 'prop-types';

export const DatePickerInput = ({ date, onChange }) => {
  const [value, setValue] = React.useState(!date || date.toString() === 'Invalid Date' ? null : date);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={value}
        onChange={newValue => {
          setValue(newValue);
          onChange(newValue);
        }}
        disableFuture
        renderInput={params => <TextField {...params} error={params?.error} />}
      />
    </LocalizationProvider>
  );
};

DatePickerInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  date: PropTypes.instanceOf(Dayjs) || null,
};

DatePickerInput.defaultProps = {
  date: dayjs(),
  onChange: () => {}
};
