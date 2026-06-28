"use client";

import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    this.props.onError?.(error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="flex min-h-[400px] flex-col items-center justify-center p-8 text-center">
          <div className="mb-4 text-6xl">⚠️</div>
          <h2 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
            Something went wrong
          </h2>
          <p className="mb-6 text-gray-600 dark:text-gray-400">
            We&apos;re sorry, but something unexpected happened. Please try
            refreshing the page.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => window.location.reload()}
              className="rounded-none bg-primary px-5 py-3 text-xs tracking-wider uppercase font-semibold text-white hover:bg-[#B59469] focus:outline-none transition-all duration-300"
            >
              Refresh Page
            </button>
            <button
              onClick={() =>
                this.setState({ hasError: false, error: undefined })
              }
              className="rounded-none border border-neutral-300 px-5 py-3 text-xs tracking-wider uppercase font-semibold text-gray-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none transition-all duration-300 dark:border-neutral-700 dark:text-gray-300"
            >
              Try Again
            </button>
          </div>
          {process.env.NODE_ENV === "development" && this.state.error && (
            <details className="mt-6 w-full max-w-2xl">
              <summary className="cursor-pointer text-sm text-gray-500">
                Error Details (Development Only)
              </summary>
              <pre className="mt-2 overflow-auto rounded bg-gray-100 p-4 text-left text-xs text-red-600 dark:bg-gray-800 dark:text-red-400">
                {this.state.error.stack}
              </pre>
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export function NavbarErrorBoundary({ children }: { children: ReactNode }) {
  return (
    <ErrorBoundary
      fallback={
        <nav className="relative flex flex-col items-center justify-between gap-4 bg-neutral-50 p-4 dark:bg-neutral-900 md:flex-row lg:px-6 lg:py-4">
          <div className="flex w-full items-center justify-between gap-0 sm:gap-4">
            <div className="flex max-w-fit gap-2 xl:gap-6">
              <div className="h-8 w-32 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700" />
            </div>
            <div className="hidden flex-1 justify-center md:flex">
              <div className="h-8 w-64 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700" />
            </div>
            <div className="flex max-w-fit gap-2 md:gap-4">
              <div className="h-8 w-8 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700" />
              <div className="h-8 w-8 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700" />
            </div>
          </div>
        </nav>
      }
    >
      {children}
    </ErrorBoundary>
  );
}

export function CartErrorBoundary({ children }: { children: ReactNode }) {
  return (
    <ErrorBoundary
      fallback={
        <div className="flex items-center justify-center p-4">
          <div className="text-center">
            <div className="mb-2 text-2xl">🛒</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Cart temporarily unavailable
            </p>
          </div>
        </div>
      }
    >
      {children}
    </ErrorBoundary>
  );
}

export function ProductErrorBoundary({ children }: { children: ReactNode }) {
  return (
    <ErrorBoundary
      fallback={
        <div className="flex min-h-[200px] items-center justify-center rounded-lg border border-gray-200 p-8 dark:border-gray-700">
          <div className="text-center">
            <div className="mb-2 text-3xl">📦</div>
            <p className="text-gray-600 dark:text-gray-400">
              Product information temporarily unavailable
            </p>
          </div>
        </div>
      }
    >
      {children}
    </ErrorBoundary>
  );
}
