import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { UserService } from "../user.service";
import * as UserActions from "./user.actions";
import { mergeMap, map, catchError } from "rxjs/operators";
import { User } from "../user";
import { of, Observable } from "rxjs";
import { Action } from "@ngrx/store";

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  @Effect()
  loadUsers$: Observable<Action> = this.actions$.pipe(
    ofType(UserActions.UserActionTypes.Load),
    mergeMap((action: UserActions.Load) =>
      this.userService.fetchUsers().pipe(
        map((users: any) => new UserActions.LoadSuccess(users)),
        catchError((err) => of(new UserActions.LoadFail(err.message)))
      )
    )
  );

  @Effect()
  createUser$: Observable<Action> = this.actions$.pipe(
    ofType(UserActions.UserActionTypes.CreateUser),
    map((action: UserActions.CreateUser) => action.payload),
    mergeMap((User: User) =>
      this.userService.addUser(User).pipe(
        map((newUser) => new UserActions.CreateUserSuccess(newUser)),
        catchError((err) => of(new UserActions.CreateUserFail(err)))
      )
    )
  );
}
