// src/components/RecurrenceOptions.js
import React from 'react';
import { useRecurrence } from './RecurrenceContext';
import { TextField, MenuItem, Grid } from '@mui/material';

const frequencies = [
  { value: 'daily', label: 'Daily' },
  { value: 'weekly', label: 'Weekly' },
  { value: 'monthly', label: 'Monthly' },
  { value: 'yearly', label: 'Yearly' },
];

const RecurrenceOptions = () => {
  const { recurrence, setRecurrence } = useRecurrence();

  const handleFrequencyChange = (event) => {
    setRecurrence((prev) => ({ ...prev, frequency: event.target.value }));
  };

  const handleIntervalChange = (event) => {
    setRecurrence((prev) => ({ ...prev, interval: event.target.value }));
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <TextField
          select
          label="Recurrence Frequency"
          value={recurrence.frequency}
          onChange={handleFrequencyChange}
          fullWidth
        >
          {frequencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      <Grid item xs={12} md={6}>
        <TextField
          label="Every"
          type="number"
          value={recurrence.interval}
          onChange={handleIntervalChange}
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
        />
      </Grid>

      {/* Additional options for days of week or nth day can be added here */}
    </Grid>
  );
};

export default RecurrenceOptions;
