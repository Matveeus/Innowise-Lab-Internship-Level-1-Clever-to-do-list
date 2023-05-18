import React, { createContext, useState, useMemo } from 'react';
import dayjs from 'dayjs';
import useTasks from '../hooks/getTasks';

const TodoContext = createContext('');

function TodoContextProvider({ children }) {
  const tasks = useTasks();
  const today = new Date();
  const maxDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
  const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);
  const daysInNextMonth = new Date(nextMonth.getFullYear(), nextMonth.getMonth(), 0).getDate();

  const daysOfMonth = useMemo(() => {
    const daysObj = {};
    [...Array(daysInNextMonth).keys()]
      .map((i) => i + today.getDate())
      .forEach((day) => {
        daysObj[new Date(today.getFullYear(), today.getMonth(), day + 1)
          .toISOString().slice(0, 10)] = day;
      });

    const nextMonthDays = today.getDate();
    if (nextMonthDays > 0) {
      const nextMonthDaysArray = [...Array(nextMonthDays).keys()].map((i) => i + 1);
      nextMonthDaysArray.forEach((day) => {
        daysObj[dayjs(nextMonth).add(day + 1, 'day').format('YYYY-MM-DD')] = day;
      });
    }

    return daysObj;
  }, [daysInNextMonth, today, nextMonth]);

  const [selectedDay, setSelectedDay] = useState(Object.keys(daysOfMonth)[0]);

  const value = useMemo(() => ({
    daysOfMonth, selectedDay, setSelectedDay, today, tasks, maxDate,
  }), [daysOfMonth, selectedDay, today, tasks, maxDate]);

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContextProvider, TodoContext };
