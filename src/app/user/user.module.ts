import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserRootComponent } from "./user-root/user-root.component";
import { UserCreateComponent } from "./user-create/user-create.component";
import { UserListComponent } from "./user-list/user-list.component";
import { RouterModule } from "@angular/router";
import { UserRoutes } from "./user.routes";
import { MaterialModule } from "../material/material.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
@NgModule({
  declarations: [UserRootComponent, UserCreateComponent, UserListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoutes),
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class UserModule {}
