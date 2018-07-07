export class EventSummary {

  private readonly _description: string;
  private readonly _id: number;
  private readonly _title: string;

  public constructor(eventJSON: any) {
    if (!eventJSON) {
      return;
    }

    this._title = eventJSON.title;
    this._description = eventJSON.description;
    this._id = eventJSON.id;
  }

  public get title(): string {
    return this._title;
  }

  public get description(): string {
    return this._description;
  }

  public get id(): number {
    return this._id;
  }
}