import { Component, OnInit, Input, Inject } from '@angular/core';

@Component({
  selector: 'hm-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  @Input() organizers!: any[];
  constructor() {}

  ngOnInit(): void {
    // console.log(this.organizers);
  }

  
}
