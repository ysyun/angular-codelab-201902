import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBarComponent implements OnInit {

  @Output()stockChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onChangeStock(e: any) {
    this.stockChange.emit(e.target.checked);
  }


}
