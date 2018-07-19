import * as Anchor from 'grommet/components/Anchor';
import * as Box from 'grommet/components/Box';
import * as GrommetFooter from 'grommet/components/Footer';
import * as Menu from 'grommet/components/Menu';
import * as Paragraph from 'grommet/components/Paragraph';
import * as Title from 'grommet/components/Title';
import * as React from 'react';

import './footer.css';

export class Footer extends React.Component {
  public render() {
    return (
      <GrommetFooter colorIndex="neutral-4" primary={true} pad="medium" justify='between'>
        <Paragraph margin='none'>
          © 2018 Syna3C
        </Paragraph>
        <Menu direction='row'
          size='small'
          dropAlign={{ "right": "right" }}>
          <Anchor href='#'>
            Contact us
          </Anchor>
          <Anchor href='#'>
            About
          </Anchor>
        </Menu>
      </GrommetFooter >
    );
  }
}