import { Component, OnInit, Inject } from "@angular/core";

import { MAT_DIALOG_DATA } from "@angular/material/dialog";
@Component({
  selector: "app-user-created-modal",
  templateUrl: "./user-created-modal.component.html",
  styleUrls: ["./user-created-modal.component.css"],
})
export class UserCreatedModalComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {}
}
