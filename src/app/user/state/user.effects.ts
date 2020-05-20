import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { UserService } from "../user.service";
import * as userActions from "./user.actions";
import { mergeMap, map, catchError } from "rxjs/operators";
import { User } from "../user";
import { of, Observable } from "rxjs";
import { Action } from "@ngrx/store";

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  @Effect()
  loadUsers$: Observable<Action> = this.actions$.pipe(
    ofType(userActions.UserActionTypes.Load),
    mergeMap((action: userActions.Load) =>
      this.userService.fetchUsers().pipe(
        map((users: any) => new userActions.LoadSuccess(users)),
        catchError((err) => of(new userActions.LoadFail(err.message)))
      )
    )
  );

  @Effect()
  createUser$: Observable<Action> = this.actions$.pipe(
    ofType(userActions.UserActionTypes.CreateUser),
    map((action: userActions.CreateUser) => action.payload),
    mergeMap((User: User) =>
      this.userService.addUser(User).pipe(
        map((newUser) => new userActions.CreateUserSuccess(newUser)),
        catchError((err) => of(new userActions.CreateUserFail(err)))
      )
    )
  );

  @Effect()
  deleteUser$: Observable<Action> = this.actions$.pipe(
    ofType(userActions.UserActionTypes.DeleteUser),
    map((action: userActions.DeleteUser) => action.payload),
    mergeMap((UserId: number) =>
      this.userService.deleteUser(UserId).pipe(
        map(() => new userActions.DeleteUserSuccess(UserId)),
        catchError((err) => of(new userActions.DeleteUserFail(err)))
      )
    )
  );
}
