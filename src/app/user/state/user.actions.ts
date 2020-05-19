import { Action } from "@ngrx/store";
import { User } from "../user";

export enum UserActionTypes {
  SetCurrentUser = "[User] Set Current User",
  ClearCurrentUser = "[User] Clear Current User",
  InitializeCurrentUser = "[User] Initialize Current User",
  Load = "[User] Load",
  LoadSuccess = "[User] Load Success",
  LoadFail = "[User] Load Fail",
}

export class SetCurrentUser implements Action {
  readonly type = UserActionTypes.SetCurrentUser;
  constructor(public payload: User) {}
}

export class ClearCurrentUser implements Action {
  readonly type = UserActionTypes.ClearCurrentUser;
}

export class InitializeCurrentUser implements Action {
  readonly type = UserActionTypes.InitializeCurrentUser;
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

export type UserActions =
  | SetCurrentUser
  | ClearCurrentUser
  | InitializeCurrentUser
  | Load
  | LoadSuccess
  | LoadFail;
