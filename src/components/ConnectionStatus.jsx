import { useEffect, useState } from 'react';

const ConnectionStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showOfflineMessage, setShowOfflineMessage] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setShowOfflineMessage(false);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowOfflineMessage(true);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (!showOfflineMessage && isOnline) return null;

  return (
    <div className={`connection-banner ${isOnline ? 'online' : 'offline'}`}>
      <div className="connection-content">
        {!isOnline ? (
          <>
            <span className="connection-icon">⚠️</span>
            <span className="connection-text">Brak połączenia z internetem</span>
          </>
        ) : (
          <>
            <span className="connection-icon">✅</span>
            <span className="connection-text">Połączenie przywrócone!</span>
          </>
        )}
      </div>
    </div>
  );
};

export default ConnectionStatus;
