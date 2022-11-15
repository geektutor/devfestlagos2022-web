import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SpeakerInfoI } from '../speaker-card/speaker-card.component';

@Component({
  selector: 'app-speaker-details-modal',
  templateUrl: './speaker-details-modal.component.html',
  styleUrls: ['./speaker-details-modal.component.scss']
})
export class SpeakerDetailsModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: SpeakerInfoI) { }

  ngOnInit(): void {
  }

}
