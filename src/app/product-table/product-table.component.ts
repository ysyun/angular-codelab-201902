import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';
import { Category } from '../category.model';

@Component({
  selector: 'product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductTableComponent implements OnInit {

  @Input()
  categories: Category[];
  // tslint:disable-next-line:no-input-rename
  @Input('stock-only')
  isStockOnly: boolean;

  constructor() { }

  ngOnInit() {
  }

}
