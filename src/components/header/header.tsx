import * as GrommetHeader from 'grommet/components/Header';
import Menu from 'grommet/components/Menu';
import Title from 'grommet/components/Title';
import * as React from 'react';
import { Link } from 'react-router-dom';

export class Header extends React.Component {
  public render() {
    return (
      <GrommetHeader justify="between" colorIndex="neutral-4" pad={{ horizontal: 'medium' }}>
        <Title>Syna3C</Title>
        <Menu inline={true} direction="row">
          <Link to="/events">Events</Link>
          <Link to="/login">Login/Sign up</Link>
        </Menu>
      </GrommetHeader>
    );
  }
}