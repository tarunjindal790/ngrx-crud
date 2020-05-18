import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserRootComponent } from "./user-root/user-root.component";
import { UserCreateComponent } from "./user-create/user-create.component";
import { UserListComponent } from "./user-list/user-list.component";
import { RouterModule } from "@angular/router";
import { UserRoutes } from "./user.routes";
import { MaterialModule } from "../material/material.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { StoreModule } from "@ngrx/store";
import { reducer } from "../user/state/user.reducer";
import { UserViewModalComponent } from "./user-view-modal/user-view-modal.component";
@NgModule({
  declarations: [
    UserRootComponent,
    UserCreateComponent,
    UserListComponent,
    UserViewModalComponent,
  ],
  entryComponents: [UserViewModalComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoutes),
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forFeature("users", reducer),
    HttpClientModule,
  ],
})
export class UserModule {}
