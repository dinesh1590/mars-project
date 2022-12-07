import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  constructor(private _emp:ProjectsService,private router: Router) {
    
  }

  public employ=[];

  ngOnInit(): void {

this.getEmployees();

console.log(this.employ)
  
    }
  
  
    private getEmployees() {
      this._emp.getEmployeesList().subscribe(data => this.employ=data);

    }
}
