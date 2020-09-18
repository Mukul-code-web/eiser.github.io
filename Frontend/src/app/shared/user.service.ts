import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser:User;
  users:User[];
  readonly baseURL = 'http://localhost:8080/users';
  readonly baseURL1 = 'http://localhost:8080/api/authenticate';
  readonly baseURL2 = 'http://localhost:8080/api2/forgotpassword';
  readonly baseURL3 = 'http://localhost:8080/api3/resetpassword';
 
  
  
  constructor(private http:HttpClient) { }

  postUser(use:User){
    return this.http.post(this.baseURL,use);
}

getUserList(){
  return this.http.get(this.baseURL);
}

login(authCredentials:any) {
  return this.http.post(this.baseURL1, authCredentials);
}


setToken(token: string) {
  localStorage.setItem('token', token);
}

getToken() {
  return localStorage.getItem('token');
}

deleteToken() {
  localStorage.removeItem('token');
}

getUserPayload() {
  var token = this.getToken();
  if (token) {
    var userPayload = atob(token.split('.')[1]);
    return JSON.parse(userPayload);
  }
  else
    return null;
}

isLoggedIn() {
  var userPayload = this.getUserPayload();
  if (userPayload)
    return userPayload.exp > Date.now() / 1000;
  else
    return false;
}

reset(data:any){
  return this.http.put(this.baseURL2,data);
}

forgot(data:any){
  return this.http.put(this.baseURL3,data);
}



}
