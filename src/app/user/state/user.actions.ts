import { Action } from "@ngrx/store";

export enum UserActionTypes {
  ToggleEditComponent = "[User] Show Edit Component",
  Load = "[User] Load",
  LoadSuccess = "[User] Load Success",
  LoadFail = "[User] Load Fail",
}

export class ToggleEditComponent implements Action {
  readonly type = UserActionTypes.ToggleEditComponent;
  constructor(public payload: boolean) {}
}

export class Load implements Action {
  readonly type = UserActionTypes.Load;
}

export class LoadSuccess implements Action {
  readonly type = UserActionTypes.LoadSuccess;
  constructor(public payload: any) {}
}

export class LoadFail implements Action {
  readonly type = UserActionTypes.LoadFail;
  constructor(public payload: String) {}
}

export type UserActions = ToggleEditComponent | Load | LoadSuccess | LoadFail;
