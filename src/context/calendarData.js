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
    const daysObj = [...Array(daysInNextMonth).keys()].reduce((obj, i) => {
      const day = i + today.getDate() + 1;
      const date = new Date(today.getFullYear(), today.getMonth(), day);
      return { ...obj, [date.toISOString().slice(0, 10)]: day - 1 };
    }, {});

    const nextMonthDays = today.getDate();
    if (nextMonthDays > 0) {
      const nextMonthDaysArray = [...Array(nextMonthDays).keys()].map((i) => i + 1);
      console.log(nextMonthDaysArray);
      nextMonthDaysArray.forEach((day) => {
        const date = dayjs(nextMonth).add(day, 'day').toDate();
        daysObj[date.toISOString().slice(0, 10)] = day;
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
