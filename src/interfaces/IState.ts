import { IEventState } from "./IEventState";
import { IUserState } from "./IUserState";

export interface IState {
  readonly userState: IUserState;
  readonly eventState: IEventState;
}