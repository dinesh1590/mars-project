import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from './response';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = "http://localhost:8080/login";


  constructor(private httpClient: HttpClient) { }

  createEmployee(user: User): Observable<Response>{
    return this.httpClient.post<Response>(`${this.baseURL}`, user);
  }

}
