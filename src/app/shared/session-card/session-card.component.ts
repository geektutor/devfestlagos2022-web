import { Component, OnInit, Input } from '@angular/core';

export interface ISessionCard {
  id?: string;
  title?: string;
  status?: string;
  hall?: string | any;
  speaker?: string | any;
  owner?: string | any;
  description?:  string | any;
  speakerImage?: string | undefined;
  category?: string | any;
  endTime?: Date | undefined;
  scheduledAt?: Date | undefined;
  scheduledDuration?: Date | undefined;
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
