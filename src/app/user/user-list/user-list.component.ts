import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MatDialog } from "@angular/material/dialog";
import { UserViewModalComponent } from "../user-view-modal/user-view-modal.component";
import { UserService } from "../user.service";
import { Store, select } from "@ngrx/store";
import * as fromUser from "../state/user.reducer";
import * as userActions from "../state/user.actions";
import { User } from "../user";
@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"],
})
export class UserListComponent implements OnInit {
  constructor(
    private store: Store<fromUser.State>,
    private http: HttpClient,
    public userService: UserService,
    public dialog: MatDialog
  ) {}

  users = {};

  ngOnInit(): void {
    // this.userService.fetchUsers().subscribe((result) => {
    //   console.log(result);
    //   this.users = result;
    //   console.log(this.users);
    // });
    this.store.dispatch(new userActions.Load());
    this.store
      .pipe(select(fromUser.getUsers))
      .subscribe((users) => (this.users = users));
  }

  createNewUser() {
    // this.store.dispatch(new userActions.InitializeCurrentUser());
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
