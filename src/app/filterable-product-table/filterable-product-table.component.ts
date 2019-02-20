import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Category } from '../category.model';

@Component({
  selector: 'filterable-product-table',
  templateUrl: './filterable-product-table.component.html',
  styleUrls: ['./filterable-product-table.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterableProductTableComponent implements OnInit {
  sample: Category[];
  isStockOnly = false;

  constructor() { }

  ngOnInit() {
    this.sample = [
      {
        name: 'Sporting Goods',
        products: [
          { price: 49, stocked: true, name: 'Football' },
          { price: 9, stocked: false, name: 'Baseball' }
        ]
      },
      {
        name: 'Electronics',
        products: [
          { price: 50, stocked: true, name: 'iPod Touch' },
          { price: 9, stocked: false, name: 'iPhone 10' },
          { price: 20, stocked: true, name: 'Nexus 10' }
        ]
      }
    ];
  }

  onChangeStock(isChecked: boolean) {
    this.isStockOnly = isChecked;
  }


}
