import { Component, OnInit, Input } from '@angular/core';
import { map } from 'rxjs';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'hm-speakers',
  templateUrl: './speakers-section.component.html',
  styleUrls: ['./speakers-section.component.scss'],
})
export class SpeakersSectionComponent implements OnInit {
  @Input() speakers!: any[];

  constructor(private appService: AppService) {}

  ngOnInit(): void {}
}
