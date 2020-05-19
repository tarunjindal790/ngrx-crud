import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MatDialog } from "@angular/material/dialog";
import { UserViewModalComponent } from "../user-view-modal/user-view-modal.component";
import { UserService } from "../user.service";
import { Store, select } from "@ngrx/store";
import * as fromUser from "../state/user.reducer";
import * as userActions from "../state/user.actions";
import { User } from "../user";
import { Observable, from } from "rxjs";
@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"],
})
export class UserListComponent implements OnInit {
  users$: Observable<any>;
  errorMessage$: Observable<String>;
  constructor(
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
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        var filtered = json.filter(function (j) {
          return j.id == userId;
        });
        console.log(filtered);
        console.log(filtered[0].name);
        this.dialog.open(UserViewModalComponent, { data: filtered[0] });
      });
  }
}
