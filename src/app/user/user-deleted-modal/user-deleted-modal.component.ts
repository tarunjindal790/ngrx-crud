import { Component, OnInit, Inject } from "@angular/core";

import { MAT_DIALOG_DATA } from "@angular/material/dialog";
@Component({
  selector: "app-user-deleted-modal",
  templateUrl: "./user-deleted-modal.component.html",
  styleUrls: ["./user-deleted-modal.component.css"],
})
export class UserDeletedModalComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {}
}
