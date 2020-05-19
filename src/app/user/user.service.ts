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

    // fetch(this.userApiUrl, {
    //   method: "POST",
    //   body: JSON.stringify({
    //     newUser,
    //   }),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((json) => {});
  }
}
