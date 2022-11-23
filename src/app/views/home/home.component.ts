import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { map } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private appService: AppService) {}

  speakers!: any[];
  sponsors!: any[];
  sessions!: any[];

  ngOnInit(): void {
    this.getSessions();

    this.getSponsors();

    this.getSpeakers();
  }

  getSessions() {
    this.appService
      .getAllSession('Session')
      .snapshotChanges()
      .pipe(
        map((changes: any) =>
          changes.map((c: any) => {
            // console.log(c);
            const id = c.payload.doc.id;
            const data = c.payload.doc.data();

            return {
              id,
              ...data,
            };
          })
        )
      )
      .subscribe((data: any) => {
        // console.log(data);
        this.sessions = data
          .filter((session: any, index: number) => {
            return index < 5;
          })
          .sort((a: any, b: any) => {
            return a.order - b.order;
          });
      });
  }

  getSponsors() {
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
        this.sponsors = data.sort((a: any, b: any) => {
          return a.order - b.order;
        });
        // console.log(this.sponsor);
      });
  }

  getSpeakers() {
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
        this.speakers = data
          .filter((speaker: any, index: number) => {
            return index < 8;
          })
          .sort((a: any, b: any) => {
            return a.order - b.order;
          });
        // console.log(this.speakers);
      });
  }
}
