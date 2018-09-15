import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Card from 'grommet/components/Card';
import fetch from 'node-fetch';
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';
import { ActionsObservable, combineEpics, Epic, ofType, StateObservable } from "redux-observable";
import { Observable, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError, map, mergeMap } from 'rxjs/operators';

import './events.css';

import { EventCard } from '../../components/event-card/event-card';
import { Event } from '../../models/event';
import { EventSummary } from '../../models/event-summary';
import { IState } from '../../interfaces/IState';
import { IEventState } from '../../interfaces/IEventState';
import { CommonActions } from '../../state/common/CommonActions';
import { EventActions } from '../../state/event/EventActions';
import { EventError} from '../../state/event/EventTypes';
import { bindActionCreators } from 'redux';
import { resolve } from 'url';
import { dispatch } from 'rxjs/internal/observable/pairs';


 interface EventProps extends React.ClassAttributes<Events>, RouteComponentProps<{}>, IEventState {
  getEvent: typeof EventActions.getEvent;
 }

 interface EventState {
  events: []; 
 }

export class Events extends React.Component <EventProps, EventState >
{
  constructor(props) {
    super(props);    
    // bind props
    
    // this.getEventFeed = this.getEventFeed.bind(this);
    // define the initial state of the application 
    this.state = {
      events: [],
    
    }
  }
  
  // lifecycle method
    componentDidMount() {
      this.props.getEvent();
    //api call to get data via the Event Action 
    //  fetch('http://localhost:4001/api/v1/events')
   //   .then(res => res.json())
   //   .then(json => {
    //    this.setState({
    //      events: json.events
   //     })
    //  })
    //  this.state.events.map((eventJSON: any) => new EventSummary(eventJSON));  
   }
   
   // private getEventFeed() {
   // console.log("getEventFeed function")
   // EventActions.getEvent();
   // }
// render the data onto the page
  public render() {
   const events = this.state.events;
      return (
          <Box>
            {this.state.events.map(event => (<EventCard key={event.eventId} event={event}/>))}
          </Box>
      );
    } 
}

 const mapStateToProps = (state: IState) => ({ ...state.eventState});
 const mapDispatchToProps = dispatch => bindActionCreators({
  getEvent: EventActions.getEvent,
  // getEventSuccess: EventActions.getEventSuccess,
  // getEventFailed: EventActions.getEventFailed,
 }, dispatch);

 export const EventPage = withRouter(connect(mapStateToProps, mapDispatchToProps)(Events));
 // as React.ComponentType<any>

 