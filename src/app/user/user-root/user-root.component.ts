import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import * as fromUser from "../state/user.reducer";
@Component({
  selector: "app-user-root",
  templateUrl: "./user-root.component.html",
  styleUrls: ["./user-root.component.css"],
})
export class UserRootComponent implements OnInit {
  constructor(private store: Store<fromUser.State>) {}

  displayEditComponent = false;

  ngOnInit(): void {
    this.store
      .pipe(select(fromUser.getShowEditComponent))
      .subscribe(
        (showEditComponent) => (this.displayEditComponent = showEditComponent)
      );
  }
}
