import React, { Component } from 'react';
import ErrorUI from '../pages/ErrorUI';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render shows the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error details to the console or an external service
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  // 3. Renders the UI
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <ErrorUI />
      );
    }

    // Normally, render the children component(s)
    return this.props.children;
  }
}

export default ErrorBoundary;