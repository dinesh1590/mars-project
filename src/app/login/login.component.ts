import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Response } from '../response';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

 public user:User=new User;

public res:Response;

constructor(private fb:FormBuilder,private _usr:UserService, private router: Router) {}
 

  userForm: FormGroup = new FormGroup({

    username: new FormControl(''),
    password: new FormControl(''),
    
  });
  submitted = false;

  get f(): { [key: string]: AbstractControl } {
    return this.userForm.controls;
  }

msg:string;

  ngOnInit(): void {

    this.userForm = this.fb.group(
      {
        username: ['',Validators.required],
        password: ['',[Validators.required,],],
  }
)

}

saveEmployee(){
  this._usr.createEmployee(this.userForm.value).subscribe( data => {this.res=data;

    this.check();
  },
  error => console.log(error));
}

check() {
  if(this.res.message==="successful") {
    this.goToEmployeeList();
    }
    else{
    this.msg=this.res.message;
    }
}

    
    goToEmployeeList(){
      this.router.navigate(['/home']);
    }
    
    onSubmit(){

      console.log(this.userForm.value);

      this.saveEmployee();
    }

    redirect() {
      this.router.navigate(['/form']);
    }
}
