import React, { ErrorInfo } from 'react';
import { Grid } from '@material-ui/core';

export class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.log('error, info :>> ', error, info);
  }

  render(): JSX.Element | React.ReactNode | null | undefined {
    if (this.state.hasError) {
      return (
        <Grid container direction="column" justify="center" alignItems="center">
          <h1>Что-то пошло не так. Произошла ошибка.</h1>
          <h2>Все пропало! Деньги списали со счета! Шутка. :)</h2>
        </Grid>
      );
    }

    return this.props.children;
  }
}
