import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sample: Product;

  constructor() {
    this.sample = { stocked: true, name: 'test', price: 30 };
  }
}
