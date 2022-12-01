import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { AppService } from 'src/app/app.service';

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

  speakers!: any[];

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService
      .getAllSpeakers('Speaker')
      .snapshotChanges()
      .pipe(
        map((changes: any) =>
          changes.map((c: any) => ({
            id: c.payload.doc.id,
            ...c.payload.doc.data(),
          }))
        )
      )
      .subscribe((data: any) => {
        // console.log(data);
        this.speakers = data.sort((a: any, b: any) => {
          return a.order - b.order;
        });
        // console.log(this.speakers);
      });
  }

  searchSpeaker = (event: any) => {
    const savedSpeakers = this.speakers

    
  };

  selectSpeaker = (event: any) => {
    // console.log(event);
  };
}
