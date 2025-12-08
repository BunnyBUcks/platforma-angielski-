import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/index.css';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="error-page">
      <div className="error-content">
        <div className="error-icon">🔍</div>
        <h1>404 - Strona nie znaleziona</h1>
        <p>Przepraszamy, strona której szukasz nie istnieje.</p>
        <div className="error-actions">
          <button 
            className="btn btn-primary"
            onClick={() => navigate('/')}
          >
            Wróć do strony głównej 🏠
          </button>
          <button 
            className="btn btn-secondary"
            onClick={() => navigate(-1)}
          >
            Wróć ← 
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
