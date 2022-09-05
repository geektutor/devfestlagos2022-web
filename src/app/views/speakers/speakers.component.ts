import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss'],
})
export class SpeakersComponent implements OnInit {
  title: string = 'Guest Speakers';
  formData: Object = {
    placeholder: 'Search Speakers',
    dropdownTitle: 'All Speakers',
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

  searchSpeaker = (event: any) => {
    console.log(event);
  };

  selectSpeaker = (event: any) => {
    console.log(event);
  };
}
