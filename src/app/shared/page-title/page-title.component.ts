import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss'],
})
export class PageTitleComponent implements OnInit {
  @Input() title: string = '';
  @Input() hasSearch: boolean = false;
  @Input() formDetails: Object | any;

  @Output() searchEvent = new EventEmitter<any>();
  @Output() selectFilterEvent = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  handleSearch = (value: any) => {
    console.log(value);
    this.searchEvent.emit(value);
  };

  handleSelectFilter = (value: any) => {
    console.log
    this.selectFilterEvent.emit(value);
  };
}
