export class EventSummary {

  private readonly _description: string;
  private readonly _eventId: number;
  private readonly _name: string;

  public constructor(eventJSON: any) {
    if (!eventJSON) {
      return;
    }

    this._name = eventJSON.name;
    this._description = eventJSON.description;
    this._eventId = eventJSON.eventId;
  }

  public get name(): string {
    return this._name;
  }

  public get description(): string {
    return this._description;
  }

  public get eventId(): number {
    return this._eventId;
  }
}