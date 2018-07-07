import Button from 'grommet/components/Button';
import Footer from 'grommet/components/Footer';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import Heading from 'grommet/components/Heading';
import PasswordInput from 'grommet/components/PasswordInput';
import Section from 'grommet/components/Section';
import TextInput from 'grommet/components/TextInput';
import * as React from 'react';

import './sign-up.css';

export class SignUp extends React.Component {

  public render() {
    return (
      <Section alignSelf="center" direction="column">
        <Form pad="medium">
          <Heading strong={true} align="center">Sign up</Heading>
          <FormField label="Email address">
            <TextInput />
          </FormField>
          <FormField label="Username">
            <TextInput />
          </FormField>
          <FormField label="Password">
            <PasswordInput />
          </FormField>
          <Footer pad={{ vertical: 'medium' }}>
            <Button fill={true} label="Sign up" pad={{ vertical: 'medium' }}
              type='submit'
              primary={true} />
          </Footer>
        </Form>
      </Section>
    );
  }
}