import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  title: string = 'Meet the Team';
  contributors!: any[];
  organizers!: any[];

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.getContributors();

    this.getOrganizers();
  }

  getContributors() {
    this.appService
      .getAllSession('Contributor')
      .snapshotChanges()
      .pipe(
        map((changes: any) =>
          changes.map((c: any) => ({
            id: c.payload.doc.id,
            ...c.payload.doc.data(),
            // endTime: c.payload?.doc?.data()?.endTime.toDate(),
            // startTime: c.payload?.doc?.data()?.startTime.toDate(),
          }))
        )
      )
      .subscribe((data: any) => {
        // console.log(data);
        this.contributors = data.sort((a: any, b: any) => {
          return a.order - b.order;
        });
        // console.log(this.contributors);
      });
  }

  getOrganizers() {
    this.appService
      .getAllSpeakers('Organizer')
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
        this.organizers = data.sort((a: any, b: any) => {
          return a.order - b.order;
        });
        // console.log(this.organizers);
      });
  }
}
