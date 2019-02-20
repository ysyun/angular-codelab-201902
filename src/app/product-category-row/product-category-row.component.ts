import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';
import { Product } from '../product.model';
import { Category } from '../category.model';

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

  constructor() { }

  ngOnInit() {
  }

}
