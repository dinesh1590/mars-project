import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';


import { ButtonModule } from 'primeng/button';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ProjectsComponent } from './projects/projects.component';


import {CarouselModule} from 'primeng/carousel';
import {ToastModule} from 'primeng/toast';
import { NotfoundComponent } from './notfound/notfound.component';
import {FormsModule} from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { FormComponent } from './form/form.component';
import {TableModule} from 'primeng/table';
import { CareersComponent } from './careers/careers.component';
import { AboutUsComponent } from './about-us/about-us.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BannerComponent,
     FooterComponent,
    LoginComponent,
    EmployeeDetailsComponent,
    ProjectsComponent,
    NotfoundComponent,
    RegisterComponent,
    FormComponent,
    CareersComponent,
    AboutUsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    CardModule,
    MenubarModule,
    CarouselModule,
    ToastModule,
    BrowserAnimationsModule,
    ButtonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
