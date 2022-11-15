import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'hm-sessions',
  templateUrl: './sessions-section.component.html',
  styleUrls: ['./sessions-section.component.scss'],
})
export class SessionsSectionComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    autoHeight: false,
    autoWidth: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 2,
      },
      940: {
        items: 2,
      },
      1400: {
        items: 3,
      },
    },
    nav: false,
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
