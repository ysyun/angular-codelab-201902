import { Component } from '@angular/core';
import { Category } from './category.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sample: Category[];

  constructor() {
    this.sample = [
      {
        name: 'Sporting Goods',
        products: [
          { price: 49, stocked: true, name: 'Football' },
          { price: 9, stocked: true, name: 'Baseball' }
        ]
      },
      {
        name: 'Electronics',
        products: [
          { price: 50, stocked: true, name: 'iPod Touch' },
          { price: 9, stocked: false, name: 'iPhone 10' },
          { price: 20, stocked: true, name: 'Nexus 10'}
        ]
      }
    ];
  }
}
