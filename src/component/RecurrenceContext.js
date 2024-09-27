// src/context/RecurrenceContext.js
import { createContext, useState, useContext } from 'react';

const RecurrenceContext = createContext();

export const RecurrenceProvider = ({ children }) => {
  const [recurrence, setRecurrence] = useState({
    frequency: 'daily',   // daily, weekly, monthly, yearly
    interval: 1,          // for customization, e.g., every 2 weeks
    daysOfWeek: [],       // specific days for weekly recurrence
    startDate: new Date(), // initial start date
    endDate: null,        // optional end date
  });

  return (
    <RecurrenceContext.Provider value={{ recurrence, setRecurrence }}>
      {children}
    </RecurrenceContext.Provider>
  );
};

export const useRecurrence = () => useContext(RecurrenceContext);
