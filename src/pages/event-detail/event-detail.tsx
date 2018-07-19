import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Spinning from 'grommet/components/icons/Spinning';
import Paragraph from 'grommet/components/Paragraph';
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { EventSummary } from '../../models/event-summary';

interface IEventDetailProps extends React.ClassAttributes<EventDetail>, RouteComponentProps<{ eventId: string }> {

}

interface IEventDetailState {
  event: EventSummary;
}

export class EventDetail extends React.Component<IEventDetailProps, IEventDetailState> {

  private static DUMMY_EVENTS = [
    {
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum bibendum dolor, rhoncus convallis quam fringilla vestibulum. Suspendisse non imperdiet nisl. Sed egestas bibendum arcu id malesuada. In vitae blandit nunc. Etiam et egestas est. Fusce convallis diam a quam lobortis feugiat. Fusce ac tristique lacus. Etiam venenatis consequat faucibus. Sed congue pharetra consequat.",
      id: 1,
      title: "Event 1",
    },
    {
      description: "Sed euismod sit amet dolor quis accumsan. Proin fermentum sapien ac diam volutpat porta. Suspendisse ut pretium dolor, ultrices accumsan sem. Fusce viverra nulla lectus, eu lacinia quam egestas placerat. Sed a leo est. Ut in tortor elementum, euismod ex nec, elementum nunc. Donec enim turpis, rhoncus ut volutpat consequat, auctor sed sem.",
      id: 2,
      title: "Event 2"
    },
    {
      description: "Vivamus urna purus, fringilla ac venenatis eget, gravida vitae arcu. Proin quis laoreet sapien, in finibus nulla. Curabitur egestas nisi aliquet mi consectetur pretium. Duis luctus non ante nec vestibulum. Maecenas iaculis fermentum odio, at ultricies ligula condimentum eu.",
      id: 3,
      title: "Event 3"
    },
    {
      description: "Pellentesque sed volutpat quam, id malesuada arcu. Curabitur malesuada lectus et lectus suscipit rhoncus. Cras dui turpis, tristique eu venenatis in, maximus sed felis. Vivamus auctor eros eu pretium feugiat.",
      id: 4,
      title: "Event 4"
    },
    {
      description: "Nunc faucibus libero felis, at egestas augue dapibus in. Curabitur sit amet aliquet massa. Sed lobortis tempor augue sit amet luctus. Praesent efficitur libero ut magna tincidunt mollis. Etiam eget eleifend lacus. Suspendisse potenti. Ut ex tellus, aliquet eu elementum nec, suscipit a nisl. Nunc gravida nisl ut ligula accumsan cursus. Nulla eget scelerisque magna. ",
      id: 5,
      title: "Event 5"
    }
  ].map((eventJSON: any) => new EventSummary(eventJSON));

  constructor(props: IEventDetailProps) {
    super(props);
    this.state = {
      event: null
    };
  }

  public componentDidMount() {
    const { eventId } = this.props.match.params;
    // TODO: Fetch the event with ID `eventId` by making a network request
    const event = EventDetail.DUMMY_EVENTS.find(eventSummary => eventSummary.id === Number.parseInt(eventId));
    setTimeout(() => {
      this.setState({
        event
      });
    }, 3000);
  }

  public render() {
    if (!this.state || !this.state.event) {
      return (
        <Box direction="row" full="true" justify="center" align="center">
          <Spinning size="large" />
        </Box>
      );
    }

    return (
      <Box full="horizontal">
        <Heading>{this.state.event.title}</Heading>
        <Heading tag="h3">This is the event detail page</Heading>
        <Paragraph>{this.state.event.description}</Paragraph>
      </Box>
    );
  }
}