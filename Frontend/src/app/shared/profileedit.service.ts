import { Injectable } from '@angular/core';
import {Profileedit } from './profileedit.model';
import {User} from './user.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileeditService {

  selectedUser:Profileedit;
  users:Profileedit[];
  readonly baseURL = 'http://localhost:8080/users';

  constructor(private http:HttpClient) { }

  putUser(emp:User){
    return this.http.put(this.baseURL,emp);
  }
}
