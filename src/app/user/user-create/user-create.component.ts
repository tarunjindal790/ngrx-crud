import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../user.service";
@Component({
  selector: "app-user-create",
  templateUrl: "./user-create.component.html",
  styleUrls: ["./user-create.component.css"],
})
export class UserCreateComponent implements OnInit {
  userForm: FormGroup;

  constructor(private userService: UserService, private fb: FormBuilder) {}

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
      let newUser = {
        username: this.name.value,
        email: this.email.value,
        phone: this.mobile.value,
      };

      this.userService.addUser(newUser);
      console.log("submit");
    }
  }
}
