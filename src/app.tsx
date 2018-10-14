import * as AppContainer from 'grommet/components/App';
import Box from 'grommet/components/Box';
import Split from 'grommet/components/Split';
import * as React from 'react';
import { connect } from 'react-redux';
import { Route, RouteComponentProps, withRouter } from 'react-router-dom';

import './app.css';

import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Sidebar } from './components/sidebar/sidebar';
import { IState } from './interfaces/IState';
import { IUserState } from './interfaces/IUserState';
import { EventDetail } from './pages/event-detail/event-detail';
import { Events } from './pages/events/events';
import { Login } from './pages/login/login';

interface IAppProps extends React.ClassAttributes<AppComponent>, RouteComponentProps<{}>, IUserState {

}

export class AppComponent extends React.Component<IAppProps> {

  public render(): any {
    return (
      <AppContainer centered={false}>
        <Split flex="right">
          {this.props.isLoggedIn && <Sidebar />}
          <Box className="site" flex={true} justify="between">
            <Header />
            <Box className="site-content" pad={{ horizontal: 'medium', vertical: 'medium' }}>
              <Route exact={true} path='/' component={Events} />
              <Route path="/event/:eventId" component={EventDetail} />
              <Route path="/events" component={Events} />
              <Route path="/login" component={Login} />
            </Box>
            <Footer />
          </Box>
        </Split>
      </AppContainer >
    );
  }
}

const mapStateToProps = (state: IState) => ({ ...state.userState })

export const App = withRouter(connect(mapStateToProps)(AppComponent))