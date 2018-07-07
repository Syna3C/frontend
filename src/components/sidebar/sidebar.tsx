import Anchor from 'grommet/components/Anchor';
import Footer from 'grommet/components/Footer';
import Menu from 'grommet/components/Menu';
import * as GrommetSidebar from 'grommet/components/Sidebar';
import * as React from "react";

export class Sidebar extends React.Component {

  public render() {
    return (
      <GrommetSidebar flex={true} justify="between" pad={{ horizontal: 'medium' }} colorIndex="light-2">
        <Menu pad={{ vertical: 'medium', between: 'small' }}>
          <Anchor href="/events">Events</Anchor>
          <Anchor href="/login">Login</Anchor>
          <Anchor href="/sign-up">Sign up</Anchor>
        </Menu>
        <Footer>
          Syna3C
        </Footer>
      </GrommetSidebar>
    );
  }
}