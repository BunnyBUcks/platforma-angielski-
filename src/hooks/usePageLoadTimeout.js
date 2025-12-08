import { useEffect, useState } from 'react';

const usePageLoadTimeout = (timeout = 10000) => {
  const [isTimedOut, setIsTimedOut] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Oznacz jako załadowane
    setIsLoaded(true);

    // Ustaw timeout
    const timer = setTimeout(() => {
      if (!isLoaded) {
        setIsTimedOut(true);
      }
    }, timeout);

    return () => clearTimeout(timer);
  }, [timeout, isLoaded]);

  return { isTimedOut, setIsLoaded };
};

export default usePageLoadTimeout;
