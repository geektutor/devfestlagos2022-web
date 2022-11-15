import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'hm-speakers',
  templateUrl: './speakers-section.component.html',
  styleUrls: ['./speakers-section.component.scss'],
})
export class SpeakersSectionComponent implements OnInit {
  
  speakers!: any[];

  constructor( private appService: AppService) {
  }

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
        this.speakers = data;
        // console.log(this.speakers);
      });
  }
}
