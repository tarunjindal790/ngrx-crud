// import { User } from "../user";
import * as fromRoot from "../../state/app.state";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserActions, UserActionTypes } from "./user.actions";

export interface State extends fromRoot.State {
  Users: UserState;
}

export interface UserState {
  currentUser: any;
  Users: Array<any>;
}

const initialState: UserState = {
  currentUser: null,
  Users: [],
};

const getUserfeatureState = createFeatureSelector<UserState>("users");

export const getUsers = createSelector(
  getUserfeatureState,
  (state) => state.Users
);

export function reducer(state = initialState, action: UserActions): UserState {
  switch (action.type) {
    case UserActionTypes.LoadSuccess:
      return {
        ...state,
        Users: action.payload,
      };

    default:
      return state;
  }
}
