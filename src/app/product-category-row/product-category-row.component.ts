import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'product-category-row',
  templateUrl: './product-category-row.component.html',
  styleUrls: ['./product-category-row.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCategoryRowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
