import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import { AppService } from 'src/app/app.service';

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

  sessions!: any[];

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService
      .getAllSession('Session')
      .snapshotChanges()
      .pipe(
        map((changes: any) =>
          changes.map((c: any) => ({
            id: c.payload.doc.id,
            ...c.payload.doc.data(),
            endTime: c.payload?.doc?.data()?.endTime.toDate(),
            startTime: c.payload?.doc?.data()?.startTime.toDate(),
          }))
        )
      )
      .subscribe((data: any) => {
        // console.log(data);
        this.sessions = data;
        // console.log(this.sessions);
      });
  }
}
