import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss'],
})
export class AgendaComponent implements OnInit {
  title:string = "Agenda"
  agendas1!: any[]
  agendas2!: any[]

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.getAgenda()
  }

  getAgenda() {
    this.appService
      .getAllSession('Agenda')
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
        this.agendas1 = data.sort((a: any, b: any) => {
          return a.order - b.order;
        })
        // .filter((x:any, index: number)=>{
        //   return index < 16
        // })

        this.agendas2 = data.sort((a: any, b: any) => {
          return a.order - b.order;
        }).filter((x:any, index: number)=>{
          return index >= 16
        })
        // console.log(this.sessions);
      });
  }
}
