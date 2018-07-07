import Anchor from 'grommet/components/Anchor';
import Card from 'grommet/components/Card';
import * as React from 'react';
import { EventSummary } from '../../models/event-summary';

export class EventCard extends React.PureComponent {

  public props: { event: EventSummary }

  public render() {
    return (
      <Card full="horizontal" key={this.props.event.id} heading={this.props.event.title} description={this.props.event.description} link={<Anchor href={`/events/${this.props.event.id}`} />} textSize="small" />
    );
  }
}