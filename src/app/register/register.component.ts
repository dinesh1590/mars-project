import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Response } from '../response';
import { User } from '../user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {


public user:User =new User;
  
public res:Response;
  constructor(private fb:FormBuilder, private router: Router,private create:EmployeeService) {}
   
  
    userForm: FormGroup = new FormGroup({
  
      username: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl(''),
  
    });
  
  msg:string;
  
    ngOnInit(): void {
  
      this.userForm = this.fb.group(
        {
          username: ['',[Validators.required,],],
          password: ['',[Validators.required,],Validators.pattern(
            /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/
          ),],
          confirmPassword: ['',[Validators.required,],Validators.pattern(
            /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/
          ),]

    }
  )
  }

  setData() {
    this.user.username=this.userForm.value.username;
    this.user.password=this.userForm.value.password;

  }
  
  saveEmployee(){

    console.log(this.user);
    this.create.createUser(this.user).subscribe( data => {

      this.check();
    }, error => console.log(error));
  }
  
  // check() {
  //   if(this.res.message==="successful") {
  //     this.goToEmployeeList();
  //     }
  //     else{
  //     this.msg=this.res.message;
  //     }
  // }

  check() {
    if(this.res.message==="successful") {
      this.goToEmployeeList();
      }
      else{
      this.msg=this.res.message;
      }
  }
  
      
      goToEmployeeList(){
        this.router.navigate(['/login']);
      }
      
      onSubmit1(){
        console.log(this.userForm.value);
        this.setData();
        this.saveEmployee();
      }
  }
  
