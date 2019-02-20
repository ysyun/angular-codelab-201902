import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'filterable-product-table',
  templateUrl: './filterable-product-table.component.html',
  styleUrls: ['./filterable-product-table.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterableProductTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getData() {
    return;
  }

}
