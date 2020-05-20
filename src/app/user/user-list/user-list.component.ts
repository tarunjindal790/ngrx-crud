import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MatDialog } from "@angular/material/dialog";
import { UserViewModalComponent } from "../user-view-modal/user-view-modal.component";
import { UserDeletedModalComponent } from "../user-deleted-modal/user-deleted-modal.component";
import { UserService } from "../user.service";
import { Store, select } from "@ngrx/store";
import * as fromUser from "../state/user.reducer";
import * as userActions from "../state/user.actions";
import { User } from "../user";
import { Observable, from } from "rxjs";
import { MatSnackBar } from "@angular/material/snack-bar";
import { tap } from "rxjs/operators";
@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"],
})
export class UserListComponent implements OnInit {
  users$: Observable<any>;
  errorMessage$: Observable<String>;
  constructor(
    private _snackBar: MatSnackBar,
    private store: Store<fromUser.State>,
    private http: HttpClient,
    public userService: UserService,
    public dialog: MatDialog
  ) {}

  users = {};

  ngOnInit(): void {
    this.store.dispatch(new userActions.Load());
    this.users$ = this.store.pipe(select(fromUser.getUsers));
    this.errorMessage$ = this.store.pipe(select(fromUser.getError));
  }

  createNewUser() {
    this.store.dispatch(new userActions.ToggleEditComponent(true));
  }

  viewUserDialog(userId) {
    this.userService.fetchUserById(userId).subscribe((result) => {
      this.dialog.open(UserViewModalComponent, { data: result });
    });
  }

  deleteUser(userId) {
    const viewDialogRef = this.dialog.open(UserDeletedModalComponent);
    viewDialogRef.afterClosed().subscribe((result) => {
      if (result == "true") {
        this.store.dispatch(new userActions.DeleteUser(userId));
      }
    });
  }
}
