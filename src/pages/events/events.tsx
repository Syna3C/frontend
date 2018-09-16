import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Card from 'grommet/components/Card';
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';
import { bindActionCreators } from 'redux';


import { EventCard } from '../../components/event-card/event-card';
import { IEventState } from '../../interfaces/IEventState';
import { IState } from '../../interfaces/IState';
import { EventActions } from '../../state/event/EventActions';

import './events.css';

interface IEventProps extends React.ClassAttributes<EventsComponent>, RouteComponentProps<{}>, IEventState {
  getEvents: typeof EventActions.getEvents;
}

class EventsComponent extends React.Component<IEventProps> {

  // lifecycle method
  public componentDidMount() {
    this.props.getEvents();
  }

  // render the data onto the page
  public render() {
    const events = this.props.events;
    if (this.props.isEventsRequestInProgress) {
      return (
        <Box>
          TODO: Use placeholder pattern to show empty list items, a la Facebook
          <p><strong>References</strong>
            <ol>
              <li>https://cloudcannon.com/deconstructions/2014/11/15/facebook-content-placeholder-deconstruction.html</li>
              <li>https://medium.com/anatomy-of-web-interface/placeholder-loading-ui-bbaf2222f95f</li>
            </ol>
          </p>
        </Box>
      )
    } else if (!this.props.events) {
      return (
        <Box>
          TODO: No events found
        </Box>
      )
    }

    return (
      <Box>
        {this.props.events.map(event => (<EventCard key={event.eventId} event={event} />))}
      </Box>
    );
  }
}

const mapStateToProps = (state: IState) => ({ ...state.eventState });
const mapDispatchToProps = dispatch => bindActionCreators({
  getEvents: EventActions.getEvents
}, dispatch);

export const Events = withRouter(connect(mapStateToProps, mapDispatchToProps)(EventsComponent))

