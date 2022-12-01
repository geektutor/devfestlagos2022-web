import { Component, OnInit, Input } from '@angular/core';

export interface IAgendaCard {
  id?: string;
  duration?: string;
  facilitator?: string;
  isbreakout?: string | any;
  schedule?: string | any;
  time?: string | any;
  sessions?: any[];
}

@Component({
  selector: 'app-agenda-card',
  templateUrl: './agenda-card.component.html',
  styleUrls: ['./agenda-card.component.scss'],
})
export class AgendaCardComponent implements OnInit {
  @Input('agenda') agenda: IAgendaCard | undefined;
  @Input() number!: number;
  panelOpenState = false;

  constructor() {}

  ngOnInit(): void {}
}
