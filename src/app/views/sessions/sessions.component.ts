import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss'],
})
export class SessionsComponent implements OnInit {
  title: string = 'Sessions';
  formData: Object = {
    placeholder: 'Search Sessions',
    dropdownTitle: 'All Sessions',
    dropDownItem: [
      { name: 'Design' },
      { name: 'Cloud' },
      { name: 'Devops' },
      { name: 'Machine Learning' },
      { name: 'Mobile' },
      { name: 'Career Development' },
      { name: 'DevFest' },
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}
