import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-page">
          <div className="error-content">
            <div className="error-icon">⚠️</div>
            <h1>Ups! Coś poszło nie tak</h1>
            <p>Wystąpił nieoczekiwany błąd. Spróbuj odświeżyć stronę.</p>
            <div className="error-actions">
              <button 
                className="btn btn-primary"
                onClick={() => window.location.href = '/'}
              >
                Wróć do strony głównej
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => window.location.reload()}
              >
                Odśwież stronę 🔄
              </button>
            </div>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="error-details">
                <summary>Szczegóły błędu (tylko w trybie deweloperskim)</summary>
                <pre>{this.state.error.toString()}</pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
