import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db, auth } from '../services/firebase';

export default function useTasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const tasksRef = ref(db, `/${auth.currentUser.uid}`);
        onValue(tasksRef, (snapshot) => {
          setTasks([]);
          const data = snapshot.val();
          if (data !== null) {
            setTasks((oldArray) => [...oldArray, ...Object.values(data)]);
          }
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return tasks;
}
