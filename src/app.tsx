import * as AppContainer from 'grommet/components/App';
import Box from 'grommet/components/Box';
import Split from 'grommet/components/Split';
import * as React from 'react';
import { Route } from 'react-router-dom';

import './app.css';

import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Sidebar } from './components/sidebar/sidebar';
import { Events } from './pages/events/events';
import { Login } from './pages/login/login';
import { SignUp } from './pages/sign-up/sign-up';

export class App extends React.Component {

  public render(): any {
    return (
      <AppContainer centered={false}>
        <Split flex="right">
          <Sidebar />
          <Box flex={true} justify="between">
            <Header />
            <Box pad={{ horizontal: 'medium', vertical: 'medium' }}>
              <Route path="/events" component={Events} />
              <Route path="/login" component={Login} />
              <Route path="/sign-up" component={SignUp} />
            </Box>
            <Footer />
          </Box>
        </Split>
      </AppContainer >
    );
  }
}