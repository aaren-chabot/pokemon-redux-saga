import React, { Component, ErrorInfo, ReactNode, ComponentType} from "react";

interface Props {
  children: ReactNode;
  ErrorComponent?: ComponentType;
  errorMessage: string;
}

interface State {
  isError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  static defaultProps = {
    errorMessage: 'Sorry there is an error at this time.'
  }
  
  public state: State = {
    isError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { isError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error boundary:", error, errorInfo);
  }

  public renderErrorComponent(Elem: ComponentType, errorMessage: string) {
    return <Elem>{errorMessage}</Elem>;
  }

  public render() {
    const {children, ErrorComponent, errorMessage} = this.props;
    const {isError} = this.state;

    if (isError && ErrorComponent) {
      return this.renderErrorComponent(ErrorComponent, errorMessage);
    }
    if (isError && !ErrorComponent) {
      return <h2>{errorMessage}</h2>
    }

    return children;
  }
}

export {ErrorBoundary};
