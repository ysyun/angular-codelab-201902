import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';
import { Product } from '../product.model';
import { Category } from '../category.model';
import * as _ from 'lodash';

@Component({
  selector: 'product-category-row',
  templateUrl: './product-category-row.component.html',
  styleUrls: ['./product-category-row.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCategoryRowComponent implements OnInit {

  @Input()
  category: Category;
  // tslint:disable-next-line:no-input-rename
  @Input('stock-only')
  set isStockOnly(value: boolean) {
    if (!this.category.products || this.category.products.length === 0) {
       return;
    }
    this.newCategory = _.cloneDeep(this.category);
    if (value) {
      this.newCategory.products = _.filter(this.newCategory.products, {stocked: true});
    } else {
      this.newCategory.products = _.cloneDeep(this.newCategory.products);
    }
  }
  newCategory: Category;

  constructor() { }

  ngOnInit() {
  }

}
