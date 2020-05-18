import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MatDialog } from "@angular/material/dialog";
import { UserViewModalComponent } from "../user-view-modal/user-view-modal.component";
import { UserService } from "../user.service";
@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"],
})
export class UserListComponent implements OnInit {
  constructor(
    private http: HttpClient,
    public userService: UserService,
    public dialog: MatDialog
  ) {}

  users = [{}];

  ngOnInit(): void {
    // this.http
    //   .get("https://jsonplaceholder.typicode.com/users")
    //   .subscribe((result) => {
    //     this.users = result;
    //   });
    var users = [{}];
    this.userService.fetchUsers().subscribe((result) => {
      console.log(result);
      users.concat(this.userService.fetchLocalUser());
      users.concat(result);
      console.log(users);
    });
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
