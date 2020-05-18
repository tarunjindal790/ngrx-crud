import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}
  localUser = [{}];

  fetchUsers() {
    // this.http
    //   .get("https://jsonplaceholder.typicode.com/users")
    //   .subscribe((result) => {
    //     // result.json()
    //     // this.user.push(result);
    //     let user = [{}];
    //     user.concat(result);
    //     user.concat(this.localUser);
    //     return user;
    //     console.log(result);
    //   });
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }

  fetchLocalUser() {
    return this.localUser;
  }

  addUser(newUser) {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        newUser,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        this.localUser.push(newUser);
        console.log(this.localUser);
      });
  }
}
