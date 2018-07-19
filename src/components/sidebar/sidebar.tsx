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
        </Menu>
        <Footer>
          TODO: This sidebar should be visible only when the user is logged in.
        </Footer>
      </GrommetSidebar>
    );
  }
}