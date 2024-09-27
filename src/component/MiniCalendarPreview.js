// src/components/MiniCalendarPreview.js
import React from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useRecurrence } from './RecurrenceContext';

const locales = {
  'en-US': require('date-fns/locale/en-US'),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const MiniCalendarPreview = () => {
  const { recurrence } = useRecurrence();

  const generateEvents = () => {
    const events = [];
    const startDate = recurrence.startDate;
    const endDate = recurrence.endDate || new Date(new Date().setFullYear(new Date().getFullYear() + 1));

    // Logic to generate events based on frequency, interval, and days of week
    // Example: Generate daily events
    if (recurrence.frequency === 'daily') {
      let currentDate = new Date(startDate);
      while (currentDate <= endDate) {
        events.push({
          title: 'Recurring Event',
          start: new Date(currentDate),
          end: new Date(currentDate),
        });
        currentDate.setDate(currentDate.getDate() + recurrence.interval);
      }
    }

    return events;
  };

  return (
    <div style={{ height: '300px', marginTop: '1rem' }}>
      <Calendar
        localizer={localizer}
        events={generateEvents()}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 300 }}
      />
    </div>
  );
};

export default MiniCalendarPreview;
