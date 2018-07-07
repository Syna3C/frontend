import * as GrommetFooter from 'grommet/components/Footer';
import * as React from 'react';

import './footer.css';

export class Footer extends React.Component {
  public render() {
    return (
      <GrommetFooter colorIndex="neutral-4" primary={true} pad={{ horizontal: 'medium', vertical: 'medium' }}>
        Site Footer Placeholder
      </GrommetFooter>
    );
  }
}