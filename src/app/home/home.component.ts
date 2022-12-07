import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  
    constructor(){}
    responsiveOptions:any;
    products:any;
    ngOnInit(): void {
      this.responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
        }
    ];
    this.products =  [
      {
        "name": "Model-I",
        "description": "Product Description",
        "image": "img1.jpg",
        
      },
      {
        "name": "Model-II",
        "description": "Product Description",
        "image": "img3.jpg",
        
      },
      {
        "name": "Model-II",
        "description": "Product Description",
        "image": "img2.jpg",
        
      }
    ]
    }
    }
	

	
	

    


  


