import Anchor from 'grommet/components/Anchor';
import * as GrommetHeader from 'grommet/components/Header';
import Menu from 'grommet/components/Menu';
import Title from 'grommet/components/Title';
import * as React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { IState } from '../../interfaces/IState';
import { UserActions } from '../../state/user/UserActions';

interface IHeaderProps extends React.ClassAttributes<HeaderComponent>, RouteComponentProps<{}> {
  isLoggedIn: boolean
  logout: typeof UserActions.logout
}

export class HeaderComponent extends React.PureComponent<IHeaderProps> {

  constructor(props: IHeaderProps) {
    super(props)

    this.logout = this.logout.bind(this)
  }

  public render() {

    const loginLogoutLink = this.props.isLoggedIn
      ? <a onClick={this.logout}>Logout</a>
      : <Link to="/login">Login/Sign up</Link>

    return (
      <GrommetHeader justify="between" colorIndex="neutral-4" pad={{ horizontal: 'medium' }}>
        <Title>Syna3C</Title>
        <Menu inline={true} direction="row">
          <Link to="/events">Events</Link>
          {loginLogoutLink}
        </Menu>
      </GrommetHeader>
    );
  }

  private logout() {
    this.props.logout()
    this.props.history.replace('/events')
  }
}

const mapStateToProps = (state: IState) => ({ isLoggedIn: state.userState.isLoggedIn })
const mapDispatchToProps = dispatch => bindActionCreators({
  logout: UserActions.logout
}, dispatch)

export const Header = withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderComponent))