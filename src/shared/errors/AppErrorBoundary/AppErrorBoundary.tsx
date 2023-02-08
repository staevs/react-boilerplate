import React from 'react';

import { AppErrorFallback } from './AppErrorFallback';

const INITIAL_STATE = {
  componentStack: null,
  error: null
};

type ErrorBoundaryState = {
  componentStack: React.ErrorInfo['componentStack'] | null;
  error: Error | null;
};

type FallbackRender = (errorData: {
  error: Error;
  componentStack: string | null;
  resetError(): void;
}) => React.ReactElement;

type ErrorBoundaryProps = {
  children: React.ReactNode | (() => React.ReactNode);

  /**
   * A fallback component that gets rendered when the error boundary encounters an error.
   *
   * Can either provide a React Component, or a function that returns React Component as
   * a valid fallback prop. If a function is provided, the function will be called with
   * the error, the component stack, and a function that resets the error boundary on error.
   *
   */
  fallback?: React.ReactElement | FallbackRender;

  /** Called when the error boundary encounters an error */
  onError?(error: Error, componentStack: string): void;

  /** Called on componentDidMount() */
  onMount?(): void;

  /** Called when resetError() is called from the fallback render props function  */
  onReset?(error: Error | null, componentStack: string | null): void;

  /** Called on componentWillUnmount() */
  onUnmount?(error: Error | null, componentStack: string | null): void;
};

export class AppErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = INITIAL_STATE;
  }

  public componentDidMount(): void {
    const { onMount } = this.props;

    if (onMount) {
      onMount();
    }
  }

  public componentDidCatch(
    error: Error & { cause?: Error },
    { componentStack }: React.ErrorInfo
  ): void {
    const { onError } = this.props;

    if (onError) {
      onError(error, componentStack);
    }

    // componentDidCatch is used over getDerivedStateFromError
    // so that componentStack is accessible through state.
    this.setState({ error, componentStack });
  }

  public componentWillUnmount(): void {
    const { error, componentStack } = this.state;
    const { onUnmount } = this.props;

    if (onUnmount) {
      onUnmount(error, componentStack);
    }
  }

  public resetErrorBoundary: () => void = () => {
    const { onReset } = this.props;
    const { error, componentStack } = this.state;

    if (onReset) {
      onReset(error, componentStack);
    }

    this.setState(INITIAL_STATE);
  };

  public render(): React.ReactNode {
    const { fallback, children } = this.props;
    const { error, componentStack } = this.state;

    if (error) {
      let element: React.ReactElement | undefined;

      if (typeof fallback === 'function') {
        element = fallback({
          error,
          componentStack,
          resetError: this.resetErrorBoundary
        });
      } else {
        element = fallback;
      }

      if (React.isValidElement(element)) {
        return element;
      }

      // Fail gracefully if no fallback provided or is not valid
      return (
        <AppErrorFallback
          componentStack={componentStack}
          error={error}
        />
      );
    }

    if (typeof children === 'function') {
      return children();
    }

    return children;
  }
}
