import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { UserService } from "../user.service";
import * as userActions from "./user.actions";
import { mergeMap, map, catchError } from "rxjs/operators";
import { User } from "../user";
import { of } from "rxjs";

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  @Effect()
  loadUsers$ = this.actions$.pipe(
    ofType(userActions.UserActionTypes.Load),
    mergeMap((action: userActions.Load) =>
      this.userService.fetchUsers().pipe(
        map((users: any) => new userActions.LoadSuccess(users)),
        catchError((err) => of(new userActions.LoadFail(err.message)))
      )
    )
  );
}
