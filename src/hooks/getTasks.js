import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db, auth } from '../services/firebase';

export default function useTasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        onValue(ref(db, `/${auth.currentUser.uid}`), (snapshot) => {
          setTasks([]);
          const data = snapshot.val();
          if (data !== null) {
            Object.values(data).map((task) => setTasks((oldArray) => [...oldArray, task]));
          }
        });
      }
    });
  }, []);
  return tasks;
}
