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
import { UserLoginError, UserSignUpError } from '../../state/user/UserTypes';

import './login.css';

interface ILoginProps extends React.ClassAttributes<LoginComponent>, RouteComponentProps<{}>, IUserState {
  login: typeof UserActions.login,
  loginFailed: typeof UserActions.loginFailed,
  signUp: typeof UserActions.signUp,
  signUpFailed: typeof UserActions.signUpFailed
}

interface ILoginState {
  signUpUsername: string;
  signUpPassword: string;
  signUpEmail: string;
}

class LoginComponent extends React.Component<ILoginProps, ILoginState> {

  private static SIGNUP_FIELDS = ["signUpEmail", "signUpPassword", "signUpUsername"];

  constructor(props: ILoginProps) {
    super(props);
    if (props.isLoggedIn) {
      props.history.replace('/dashboard');
      return;
    }

    this.login = this.login.bind(this);
    this.signUp = this.signUp.bind(this);
    this.validateLoginForm = this.validateLoginForm.bind(this);
    this.validateSignUpForm = this.validateSignUpForm.bind(this);
    this.changeSignUpField = this.changeSignUpField.bind(this);

    this.state = {
      signUpEmail: "",
      signUpPassword: "",
      signUpUsername: ""
    };
  }

  public render() {

    const loginErrors = (this.props.loginErrors || []).map(it => this.getLoginErrorMessage(it));
    const signUpErrors = (this.props.signUpErrors || []).map(it => this.getSignUpErrorMessage(it));

    return (
      <Section justify="center" direction="row">
        <Tabs>
          <Tab title="Login">
            <LoginForm secondaryText="Login to Syna3C to access your dashboard" onSubmit={this.login} errors={loginErrors} />
          </Tab>
          <Tab title="Sign up">
            <Form pad="medium">
              <Box align="center">
                <Paragraph margin="none" align="center">Create an account</Paragraph>
              </Box>
              <fieldset>
                <FormField label="Email address">
                  <TextInput name="signUpEmail" value={this.state.signUpEmail} onDOMChange={this.changeSignUpField} />
                </FormField>
                <FormField label="Username">
                  <TextInput name="signUpUsername" value={this.state.signUpUsername} onDOMChange={this.changeSignUpField} />
                </FormField>
                <FormField label="Password">
                  <PasswordInput name="signUpPassword" value={this.state.signUpPassword} onChange={this.changeSignUpField} />
                </FormField>
                {signUpErrors.map(it => (
                  <div key={it} className="error">
                    <span>{it}</span>
                  </div>
                ))}
              </fieldset>
              <Footer pad={{ vertical: 'none', between: 'medium' }}>
                <Button fill={true} label="Sign up" pad={{ vertical: 'medium' }}
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
      case UserLoginError.EMAIL_MISSING:
        return 'Enter your email';
      case UserLoginError.INVALID_EMAIL:
        return 'Invalid email address';
      case UserLoginError.PASSWORD_MISSING:
        return 'Enter your password';
      case UserLoginError.PASSWORD_TOO_SHORT:
        return 'Password is too short';
      case UserLoginError.INVALID_USERNAME_OR_PASSWORD:
        return 'Invalid username or password';
      case UserLoginError.SERVER_ERROR:
        return 'An unknown error has occurred. Please try again later';
    }
  }

  private validateLoginForm(email: string, password: string): UserLoginError[] {
    const validationErrors: UserLoginError[] = [];

    if (!email || email.trim() === "") {
      validationErrors.push(UserLoginError.EMAIL_MISSING);
    } else if (email.length < 4) { // TODO: Add email regex verification
      validationErrors.push(UserLoginError.INVALID_EMAIL);
    }

    if (!password || password.trim() === "") {
      validationErrors.push(UserLoginError.PASSWORD_MISSING);
    } else if (password.length < 6) {
      validationErrors.push(UserLoginError.PASSWORD_TOO_SHORT);
    }

    return validationErrors;
  }

  private login(formData: { username: string; password: string; rememberMe: boolean }) {
    const loginErrors = this.validateLoginForm(formData.username, formData.password);
    if (loginErrors.length) {
      this.props.loginFailed(...loginErrors);
    } else {
      this.props.login(formData);
    }
  }

  private getSignUpErrorMessage(signUpError: UserSignUpError): string {
    switch (signUpError) {
      case UserSignUpError.EMAIL_MISSING:
        return 'Enter your email';
      case UserSignUpError.INVALID_EMAIL:
        return 'Invalid email address';
      case UserSignUpError.PASSWORD_MISSING:
        return 'Enter your password';
      case UserSignUpError.PASSWORD_TOO_SHORT:
        return 'Password is too short';
      case UserSignUpError.USERNAME_MISSING:
        return 'Enter your username';
      case UserSignUpError.USERNAME_TOO_SHORT:
        return 'Username is too short';
      case UserSignUpError.USER_EXISTS:
        return 'Username is not available. Please try a different username';
      case UserSignUpError.SERVER_ERROR:
        return 'An unknown error has occurred. Please try again later';
    }
  }

  private validateSignUpForm(username: string, email: string, password: string): UserSignUpError[] {
    const validationErrors: UserSignUpError[] = [];

    if (!username || username.trim() === "") {
      validationErrors.push(UserSignUpError.USERNAME_MISSING)
    } else if (username.length < 4) {
      validationErrors.push(UserSignUpError.USERNAME_TOO_SHORT);
    }

    if (!email || email.trim() === "") {
      validationErrors.push(UserSignUpError.EMAIL_MISSING);
    } else if (email.length < 4) { // TODO: Add email regex verification
      validationErrors.push(UserSignUpError.INVALID_EMAIL);
    }

    if (!password || password.trim() === "") {
      validationErrors.push(UserSignUpError.PASSWORD_MISSING);
    } else if (password.length < 6) {
      validationErrors.push(UserSignUpError.PASSWORD_TOO_SHORT);
    }

    return validationErrors;
  }

  private signUp() {
    const signUpErrors = this.validateSignUpForm(this.state.signUpUsername, this.state.signUpEmail, this.state.signUpPassword);
    if (signUpErrors.length) {
      this.props.signUpFailed(...signUpErrors);
    } else {
      this.props.signUp({
        email: this.state.signUpEmail,
        password: this.state.signUpPassword,
        username: this.state.signUpUsername
      });
    }
  }

  private changeSignUpField(event: any) {
    const fieldName = event.target.getAttribute('name');
    if (!LoginComponent.SIGNUP_FIELDS.includes(fieldName)) {
      throw new Error(`changeSignUpField was called for an invalid sign-up field/state property: "${fieldName}"`);
    }

    this.setState({
      [fieldName]: event.target.value
    } as any);

  }
}

const mapStateToProps = (state: IState) => ({ ...state.userState });
const mapDispatchToProps = dispatch => bindActionCreators({
  login: UserActions.login,
  loginFailed: UserActions.loginFailed,
  signUp: UserActions.signUp,
  signUpFailed: UserActions.signUpFailed
}, dispatch);

export const Login = withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginComponent));