import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { UserService } from '../user.service';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  items: MenuItem[];

  

  constructor(private router: Router,private service:UserService) {

  }


    ngOnInit() {
        this.items = [
            {
                label:'home',
                routerLink:['/home'],

                icon:'pi pi-fw pi-home',
                
                        
                
            },
            {
                label:'employee',
                routerLink:['/employees'],
                icon:'pi pi-fw pi-user',
                
                    // {
                    //     label:'Left',
                    //     icon:'pi pi-fw pi-align-left'
                    // },
                    // {
                    //     label:'Right',
                    //     icon:'pi pi-fw pi-align-right'
                    // },
                    // {
                    //     label:'Center',
                    //     icon:'pi pi-fw pi-align-center'
                    // },
                    // {
                    //     label:'Justify',
                    //     icon:'pi pi-fw pi-align-justify'
                    // },

                
            },
            {
                label:'projects',
                routerLink:['/projects'],

                icon:'pi pi-fw pi-bookmark',        
                
            },
            {
                label:'carrries',
                routerLink:['/career'],
                icon:'pi pi-fw pi-calendar',
               
                   
            },
            {
                label:'about us',
                routerLink:['/about'],
                icon:'pi pi-fw pi-thumbs-up'
            },
           
        ];
    } 
    
    login() {
      this.router.navigate(['/login']);
    }
}

