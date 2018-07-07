import LoginForm from 'grommet/components/LoginForm';
import Section from 'grommet/components/Section';
import * as React from 'react';

import './login.css';

export class Login extends React.Component {

  public render() {
    return (
      <Section justify="center" direction="row">
        <LoginForm title="Login" secondaryText="Login to Syna3C to access your dashboard" onSubmit={this.onLogin} />
      </Section>
    );
  }

  private onLogin() {
    // TODO: Implement login
  }
}