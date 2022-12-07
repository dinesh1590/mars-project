import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from './projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {


  private baseURL = "http://localhost:8080/projects";

  constructor(private httpClient: HttpClient) { }
  
  getEmployeesList(): Observable<Project[]>{
    return this.httpClient.get<Project[]>(`${this.baseURL}`);
  }

  createEmployee(employee: Project): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, employee);
  }

}
