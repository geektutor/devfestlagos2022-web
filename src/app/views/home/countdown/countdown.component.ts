import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss'],
})
export class CountdownComponent implements AfterViewInit {
  eventDate: any = new Date('2022-11-26 10:00');
  now: any = new Date();
  isExpired: boolean = false;

  @ViewChild('showDays') showDays: any;
  @ViewChild('showHours') showHours: any;
  @ViewChild('showMinutes') showMinutes: any;
  @ViewChild('showSeconds') showSeconds: any;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    const x = setInterval(() => {
      const distance = this.eventDate - this.now;

      this.tickTock(distance);

      // console.log(this.showDays.nativeElement);

      if (distance < 0) {
        clearInterval(x);
        this.isExpired = true;
      }
    }, 1000);
  }

  tickTock(distance: any) {
    // Time calculations for days, hours, minutes and seconds
    this.showDays.nativeElement.innerText = Math.floor(
      distance / (1000 * 60 * 60 * 24)
    );
    this.showHours.nativeElement.innerText = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    this.showMinutes.nativeElement.innerText = Math.floor(
      (distance % (1000 * 60 * 60)) / (1000 * 60)
    );
    this.showSeconds.nativeElement.innerText = Math.floor(
      (distance % (1000 * 60)) / 1000
    );
  }
}
