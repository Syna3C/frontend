import * as AppContainer from 'grommet/components/App';
import Box from 'grommet/components/Box';
import Split from 'grommet/components/Split';
import * as React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';

import './app.css';

import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Sidebar } from './components/sidebar/sidebar';
import { EventDetail } from './pages/event-detail/event-detail';
import { Events } from './pages/events/events';
import { Login } from './pages/login/login';
import { store } from './state/store';

export class App extends React.Component {

  public render(): any {
    return (
      <Provider store={store}>
        <AppContainer centered={false}>
          <Split flex="right">
            <Sidebar />
            <Box className="site" flex={true} justify="between">
              <Header />
              <Box className="site-content" pad={{ horizontal: 'medium', vertical: 'medium' }}>
                <Route path="/event/:eventId" component={EventDetail} />
                <Route path="/events" component={Events} />
                <Route path="/login" component={Login} />
              </Box>
              <Footer />
            </Box>
          </Split>
        </AppContainer >
      </Provider>
    );
  }
}