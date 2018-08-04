import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Footer from 'grommet/components/Footer';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import Heading from 'grommet/components/Heading';
import LoginForm from 'grommet/components/LoginForm';
import Paragraph from 'grommet/components/Paragraph';
import PasswordInput from 'grommet/components/PasswordInput';
import Section from 'grommet/components/Section';
import Tab from 'grommet/components/Tab';
import Tabs from 'grommet/components/Tabs';
import TextInput from 'grommet/components/TextInput';
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { IState } from '../../interfaces/IState';
import { IUserState } from '../../interfaces/IUserState';
import { CommonActions } from '../../state/common/CommonActions';
import { UserActions } from '../../state/user/UserActions';
import { UserLoginError } from '../../state/user/UserTypes';

import './login.css';

interface ILoginProps extends React.ClassAttributes<LoginComponent>, RouteComponentProps<{}>, IUserState {
  loginUser: typeof UserActions.loginUser
}

interface ILoginState {
  loginErrors: string[]
}

class LoginComponent extends React.Component<ILoginProps, ILoginState> {

  constructor(props: ILoginProps) {
    super(props);
    if (props.isLoggedIn) {
      props.history.replace('/dashboard');
      return;
    }

    this.state = {
      loginErrors: []
    }

    this.login = this.login.bind(this);
    this.validateLoginForm = this.validateLoginForm.bind(this);
  }

  public render() {

    const loginRequestErrors = this.props.loginError ? [...this.state.loginErrors, this.getLoginErrorMessage(this.props.loginError)] : this.state.loginErrors;

    return (
      <Section justify="center" direction="row">
        <Tabs>
          <Tab title="Login">
            <LoginForm secondaryText="Login to Syna3C to access your dashboard" onSubmit={this.login} errors={loginRequestErrors} />
          </Tab>
          <Tab title="Sign up">
            <Form pad="medium">
              <Box align="center">
                <Paragraph margin="none" align="center">Create an account</Paragraph>
              </Box>
              <fieldset>
                <FormField label="Email address" error="">
                  <TextInput />
                </FormField>
                <FormField label="Username">
                  <TextInput />
                </FormField>
                <FormField label="Password">
                  <PasswordInput />
                </FormField>
              </fieldset>
              <Footer pad={{ vertical: 'medium' }}>
                <Button fill={true} label="Sign up" pad={{ vertical: 'medium' }}
                  type='submit'
                  onClick={this.signUp}
                  primary={true} />
              </Footer>
            </Form>
          </Tab>
        </Tabs>

      </Section>
    );
  }

  private getLoginErrorMessage(loginError: UserLoginError): string {
    switch (loginError) {
      case UserLoginError.INVALID_USERNAME_OR_PASSWORD:
        return 'Invalid username or password';
      case UserLoginError.SERVER_ERROR:
        return 'An unknown error has occurred. Please try again later';
    }
  }

  private validateLoginForm(username: string, password: string): string[] {
    const validationErrors: string[] = [];
    if (!username || username.trim() === "") {
      validationErrors.push('Enter your email');
    } else if (username.length < 4) { // TODO: Add email regex verification
      validationErrors.push('Invalid email address');
    }

    if (!password || password.trim() === "") {
      validationErrors.push('Enter your password');
    } else if (password.length < 6) {
      validationErrors.push('Password is too short');
    }

    return validationErrors;
  }

  private login(formData: { username: string; password: string; rememberMe: boolean }) {
    const loginErrors = this.validateLoginForm(formData.username, formData.password);
    if (loginErrors.length) {
      this.setState({
        loginErrors
      });
    } else {
      this.props.loginUser(formData);
    }
  }

  private signUp() {
    // TODO: Implement signUp
  }
}

const mapStateToProps = (state: IState) => ({ ...state.userState });
const mapDispatchToProps = dispatch => bindActionCreators({
  loginUser: UserActions.loginUser,
}, dispatch);

export const Login = withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginComponent));