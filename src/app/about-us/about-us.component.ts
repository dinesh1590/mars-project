import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  template: `
<app-banner></app-banner>
<h1>Company Overview</h1>
<p>MARS Telecom Systems (ISO 9001:2008 certified and CMMi Level 3 Appraised) is an established software product development solutions provider and an outsourced development and services partner with deep expertise in the telecom, networking, convergence and custom application development.</p>

<p>MARS offers exemplary software product development and QA services to global clients and our client rely on our proven practices, global delivery models, state-of-art development centers in Hyderabad and Bangalore, India and a talented team of domain specialists ensure that the clients derive optimum return on their IT budgets.</p>

<p>MARS strength lies in our flexible partnering models, talented pool of experienced Software Engineers; flawless project execution and our innovative solutions are focused to augment the business value of our clients. MARS Telecom has managed several global engagements by leveraging its local market knowledge, technical expertise and experience to provide highly competent resources, excellent work culture and world-class infrastructure.</p>

<p>Globally, Corporates are facing challenges in terms of keeping pace with the technology and embracing cost effective newer technologies has become one of the important to strategy to stay competitive. MARS aligns its services, engagements, capabilities to meet these challenges and we believe that by clients enjoy multi-lateral benefits like cost-efficiency, increased focus, speed of delivery and market-worthiness of the products and solutions. With a massive R&D experience: consummate expertise, unique insights, professionalism and commitment to quality is what we bring to the table.</p>

    `,
  styles: [
    `

p {
  margin-left:20px;
}

h1 {
  color:blue;
  margin-left:20px;
}

    
    `
  ]
})
export class AboutUsComponent {

}
