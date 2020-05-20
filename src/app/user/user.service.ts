import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap, map } from "rxjs/operators";
import { User } from "./user";
@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}
  private userApiUrl = "https://jsonplaceholder.typicode.com/users";

  fetchUsers() {
    return this.http.get(this.userApiUrl);
  }

  fetchUserById(userId) {
    return this.http.get(this.userApiUrl + "/" + userId);
  }

  addUser(newUser: User) {
    const headers = new HttpHeaders({
      "Content-type": "application/json; charset=UTF-8",
    });
    return this.http
      .post<User>(this.userApiUrl, newUser, { headers })
      .pipe(
        tap((data) => {
          console.log("Created" + data);
        })
      );
  }

  deleteUser(user) {
    // fetch(this.userApiUrl + "/" + user.id, {
    //   method: "DELETE",
    // }).then((response) => console.log(response));
    console.log("Deleting" + user.id);
    return this.http.delete(this.userApiUrl + "/" + user.id);
  }
}
