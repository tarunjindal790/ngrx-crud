// import { User } from "../user";
import * as fromRoot from "../../state/app.state";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserActions, UserActionTypes } from "./user.actions";

export interface State extends fromRoot.State {
  Users: UserState;
}

export interface UserState {
  showEditComponent: boolean;
  Users: Array<any>;
  error: String;
}

const initialState: UserState = {
  showEditComponent: false,
  Users: [],
  error: "",
};

const getUserfeatureState = createFeatureSelector<UserState>("users");

export const getUsers = createSelector(
  getUserfeatureState,
  (state) => state.Users
);

export const getShowEditComponent = createSelector(
  getUserfeatureState,
  (state) => state.showEditComponent
);

export const getError = createSelector(
  getUserfeatureState,
  (state) => state.error
);

export function reducer(state = initialState, action: UserActions): UserState {
  switch (action.type) {
    case UserActionTypes.ToggleEditComponent:
      return {
        ...state,
        showEditComponent: action.payload,
      };

    case UserActionTypes.LoadSuccess:
      return {
        ...state,
        Users: action.payload,
      };

    case UserActionTypes.LoadFail:
      return {
        ...state,
        Users: [],
        error: action.payload,
      };

    case UserActionTypes.CreateUserSuccess:
      return {
        ...state,
        Users: [...state.Users, action.payload],
        error: "",
      };

    case UserActionTypes.CreateUserFail:
      return {
        ...state,
        error: action.payload,
      };

    case UserActionTypes.DeleteUserSuccess:
      return {
        ...state,
        Users: state.Users.filter((user) => user.id !== action.payload),
        error: "",
      };

    case UserActionTypes.DeleteUserFail:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
}
