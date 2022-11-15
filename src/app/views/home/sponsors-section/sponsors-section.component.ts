import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'hm-sponsors',
  templateUrl: './sponsors-section.component.html',
  styleUrls: ['./sponsors-section.component.scss'],
})
export class SponsorsSectionComponent implements OnInit {
  speakers!: any[];

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService
      .getAllSponsors('Sponsor')
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
