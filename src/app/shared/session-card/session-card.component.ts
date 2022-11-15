import { Component, OnInit, Input } from '@angular/core';

export interface ISessionCard {
  id?: string;
  title?: string;
  status?: string;
  venue?: string | any;
  speaker?: string | any;
  category?: string | any;
  endTime?: Date | undefined;
  startTime?: Date | undefined;
}

@Component({
  selector: 'app-session-card',
  templateUrl: './session-card.component.html',
  styleUrls: ['./session-card.component.scss'],
})
export class SessionCardComponent implements OnInit {
  @Input('sessionInfo') sessionInfo: ISessionCard | undefined;

  constructor() {}

  ngOnInit(): void {}
}
