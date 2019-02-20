import { Component } from '@angular/core';
import { Category } from './category.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sample: Category;

  constructor() {
    this.sample = {
      name: 'test',
      products: [
        { stocked: true, name: 'test', price: 30 },
      ]
    };
  }
}
