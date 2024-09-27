// src/components/RecurringDatePicker.js
import React from 'react';
import RecurrenceOptions from './RecurrenceOptions';
import DateRangePicker from './DateRangePicker';
import MiniCalendarPreview from './MiniCalendarPreview';
import { RecurrenceProvider } from './RecurrenceContext';

const RecurringDatePicker = () => {
  return (
    <RecurrenceProvider>
      <div style={{ padding: '2rem' }}>
        <h2>Recurring Date Picker</h2>
        <RecurrenceOptions />
        <DateRangePicker />
        <MiniCalendarPreview />
      </div>
    </RecurrenceProvider>
  );
};

export default RecurringDatePicker;
