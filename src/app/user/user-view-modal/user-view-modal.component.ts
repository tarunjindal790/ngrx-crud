import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
@Component({
  selector: "app-user-view-modal",
  templateUrl: "./user-view-modal.component.html",
  styleUrls: ["./user-view-modal.component.css"],
})
export class UserViewModalComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {}
}
