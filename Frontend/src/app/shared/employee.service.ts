import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employee} from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  selectedEmployee:Employee;
  employees:Employee[];
  readonly baseURL = 'http://localhost:8080/employees';

  constructor(private http:HttpClient) { }

  postEmployee(emp:Employee){
    return this.http.post(this.baseURL,emp);
}

getEmployeeList(){
  return this.http.get(this.baseURL);
}

putEmployee(emp:Employee){
  return this.http.put(this.baseURL,emp);
}

deleteEmployee(_id: string) {
  return this.http.delete(this.baseURL + `/${_id}`);
}
}



