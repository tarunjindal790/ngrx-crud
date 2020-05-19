import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../user.service";
import { User } from "../user";
import { Store, select } from "@ngrx/store";
import * as fromUser from "../state/user.reducer";
import * as userActions from "../state/user.actions";
import { MatDialog } from "@angular/material/dialog";
import { UserCreatedModalComponent } from "../user-created-modal/user-created-modal.component";
@Component({
  selector: "app-user-create",
  templateUrl: "./user-create.component.html",
  styleUrls: ["./user-create.component.css"],
})
export class UserCreateComponent implements OnInit {
  userForm: FormGroup;

  constructor(
    private store: Store<fromUser.UserState>,
    private userService: UserService,
    private fb: FormBuilder,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      email: [
        "",
        [
          Validators.required,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"),
        ],
      ],
      mobile: ["", [Validators.required, Validators.pattern("[0-9]{10}")]],
    });
  }

  get name() {
    return this.userForm.get("name");
  }
  get email() {
    return this.userForm.get("email");
  }
  get mobile() {
    return this.userForm.get("mobile");
  }

  submitUser() {
    if (this.userForm.valid) {
      let newUser: User = {
        id: 1,
        name: this.name.value,
        email: this.email.value,
        mobile: this.mobile.value,
      };

      // this.userForm.reset();

      this.userService.addUser(newUser).subscribe({
        next: (user) => {
          console.log(user);
          this.dialog.open(UserCreatedModalComponent, { data: user });
        },
      });
      console.log("submit");
    }
  }

  hideEditComponent() {
    this.store.dispatch(new userActions.ToggleEditComponent(false));
  }
}
