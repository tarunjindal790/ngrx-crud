import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserRootComponent } from "./user-root/user-root.component";
import { UserCreateComponent } from "./user-create/user-create.component";
import { UserListComponent } from "./user-list/user-list.component";
import { RouterModule } from "@angular/router";
import { UserRoutes } from "./user.routes";
@NgModule({
  declarations: [UserRootComponent, UserCreateComponent, UserListComponent],
  imports: [CommonModule, RouterModule.forChild(UserRoutes)],
})
export class UserModule {}
