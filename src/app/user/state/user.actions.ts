import { Action } from "@ngrx/store";
import { User } from "../user";
export enum UserActionTypes {
  ToggleEditComponent = "[User] Show Edit Component",
  Load = "[User] Load",
  LoadSuccess = "[User] Load Success",
  LoadFail = "[User] Load Fail",
  CreateUser = "[User] Create User",
  CreateUserSuccess = "[User] Create User Success",
  CreateUserFail = "[User] Create User Fail",
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

export class CreateUser implements Action {
  readonly type = UserActionTypes.CreateUser;

  constructor(public payload: User) {}
}

export class CreateUserSuccess implements Action {
  readonly type = UserActionTypes.CreateUserSuccess;

  constructor(public payload: User) {}
}

export class CreateUserFail implements Action {
  readonly type = UserActionTypes.CreateUserFail;

  constructor(public payload: string) {}
}

export type UserActions =
  | ToggleEditComponent
  | Load
  | LoadSuccess
  | LoadFail
  | CreateUser
  | CreateUserFail
  | CreateUserSuccess;
