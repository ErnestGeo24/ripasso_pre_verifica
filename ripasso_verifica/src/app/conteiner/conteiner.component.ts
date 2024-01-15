import { Component } from '@angular/core';

@Component({
  selector: 'app-conteiner',
  templateUrl: './conteiner.component.html',
  styleUrls: ['./conteiner.component.css']
})
export class UserListComponent {
  names: string[]; 
  constructor() { 
     this.names = ['Toyota Corolla','Audi Q5', 'Ford Mustang', ' Honda Civic', 'Volkswagen Golf','Chevrolet Camaro','Mercedes-Benz E-Class',' BMW 3 Series','Tesla Model S','Jeep Wrangler'];
  }
}