// src/components/DateRangePicker.js
import React from 'react';
import { useRecurrence } from './RecurrenceContext';
import { TextField, Grid } from '@mui/material';

const DateRangePicker = () => {
  const { recurrence, setRecurrence } = useRecurrence();

  const handleDateChange = (field) => (event) => {
    setRecurrence((prev) => ({
      ...prev,
      [field]: new Date(event.target.value),
    }));
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <TextField
          label="Start Date"
          type="date"
          value={recurrence.startDate.toISOString().split('T')[0]}
          onChange={handleDateChange('startDate')}
          InputLabelProps={{ shrink: true }}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          label="End Date (optional)"
          type="date"
          value={recurrence.endDate ? recurrence.endDate.toISOString().split('T')[0] : ''}
          onChange={handleDateChange('endDate')}
          InputLabelProps={{ shrink: true }}
          fullWidth
        />
      </Grid>
    </Grid>
  );
};

export default DateRangePicker;
