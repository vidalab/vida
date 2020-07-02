import React from 'react'

interface ErrorBoundaryProps {

}

interface ErrorBoundaryState {
  hasError: boolean
}

interface ErrorBoundaryError {

}

interface ErrorBoundaryStateInfo {

}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: ErrorBoundaryError) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: ErrorBoundaryError, errorInfo: ErrorBoundaryStateInfo) {
    // You can also log the error to an error reporting service
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary