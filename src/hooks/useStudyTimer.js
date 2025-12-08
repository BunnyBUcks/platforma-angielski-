import { useEffect, useRef } from 'react';
import { useProgress } from '../contexts/ProgressContext';

/**
 * Hook do automatycznego śledzenia czasu spędzonego w kursie
 * Zapisuje czas co 1 minutę
 */
export const useStudyTimer = (courseId) => {
  const { addStudyTime } = useProgress();
  const startTimeRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    // Zapisz czas rozpoczęcia
    startTimeRef.current = Date.now();

    // Zapisuj czas co 1 minutę
    intervalRef.current = setInterval(() => {
      const now = Date.now();
      const elapsed = Math.floor((now - startTimeRef.current) / (1000 * 60)); // minuty
      
      if (elapsed >= 1) {
        addStudyTime(courseId, elapsed);
        startTimeRef.current = now; // Reset startu
      }
    }, 60000); // Co minutę

    // Cleanup - zapisz pozostały czas przy opuszczeniu strony
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      
      if (startTimeRef.current) {
        const now = Date.now();
        const elapsed = Math.floor((now - startTimeRef.current) / (1000 * 60));
        if (elapsed >= 1) {
          addStudyTime(courseId, elapsed);
        }
      }
    };
  }, [courseId, addStudyTime]);
};

export default useStudyTimer;
