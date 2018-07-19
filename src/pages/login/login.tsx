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

import './login.css';

export class Login extends React.Component {

  public render() {
    return (
      <Section justify="center" direction="row">
        <Tabs>
          <Tab title="Login">
            <LoginForm secondaryText="Login to Syna3C to access your dashboard" onSubmit={this.onLogin} />
          </Tab>
          <Tab title="Sign up">
            <Form pad="medium">
              <Box align="center">
                <Paragraph margin="none" align="center">Create an account</Paragraph>
              </Box>
              <fieldset>
                <FormField label="Email address">
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
                  primary={true} />
              </Footer>
            </Form>
          </Tab>
        </Tabs>

      </Section>
    );
  }

  private onLogin() {
    // TODO: Implement login
  }
}