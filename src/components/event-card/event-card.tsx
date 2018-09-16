import Anchor from 'grommet/components/Anchor';
import Card from 'grommet/components/Card';
import * as React from 'react';
import { Event } from '../../models/event';

interface IEventCardProps extends React.ClassAttributes<EventCard> {
  event: Event;
}

export class EventCard extends React.PureComponent<IEventCardProps> {

  public render() {
    const eventLink = `/event/${this.props.event.eventId}`;

    return (
      <Card full="horizontal" key={this.props.event.eventId} heading={this.props.event.name} description={this.props.event.description} link={<Anchor href={eventLink} label="Read more" />} textSize="small" />
    );
  }
}