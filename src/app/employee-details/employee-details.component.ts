import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent {


  constructor(private _emp:EmployeeService,private router: Router) {
    
  }

  public employ=[];

  ngOnInit(): void {

this.getEmployees();

console.log(this.employ)
  
    }
  
    public isValid:boolean=false;
  
  
    private getEmployees() {
      this._emp.getEmployeesList().subscribe(data => this.employ=data);

    }
}
