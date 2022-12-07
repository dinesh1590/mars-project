import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CareersComponent } from './careers/careers.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProjectsComponent } from './projects/projects.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [

{path:'login',component:LoginComponent},
{path:'home',component:HomeComponent},
{path:'register',component:RegisterComponent},
{path:'employees',component:EmployeeDetailsComponent},
{path:'projects',component:ProjectsComponent},
{path:'form',component:FormComponent},
{path:'career',component: CareersComponent},
{path:'about',component: AboutUsComponent},
{path:'',redirectTo:'/login', pathMatch:'full'},

{path:'**',component:NotfoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
