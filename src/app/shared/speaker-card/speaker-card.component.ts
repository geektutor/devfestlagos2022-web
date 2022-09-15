import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SpeakerDetailsModalComponent } from '../speaker-details-modal/speaker-details-modal.component';

export interface SpeakerInfoI {
  name: string;
  description?: string;
  jobTitle?: string;
  company?: string;
  speakerImgUrl?: string;
  socials?: {
    gitUrl?: string;
    twitterUrl?: string;
    linkedInUrl?: string;
  };
}

@Component({
  selector: '[app-speaker-card]',
  templateUrl: './speaker-card.component.html',
  styleUrls: ['./speaker-card.component.scss'],
})
export class SpeakerCardComponent implements OnInit {
  @Input('data') speakerInfo: SpeakerInfoI | undefined;
  @Input('profileView') profileView: boolean = true;

  constructor(private dialogRef: MatDialog) {
    this.speakerInfo = {
      name: 'Akinjobi Sodiq',
      description:
        'Lorem ipsum dolor sit amet. Rem cupiditate velit est iste repellat et facilis quod. In reiciendis expedita quo enim animi et quia deserunt ea esse',
      jobTitle: 'Meme King',
      company: 'Google',
      socials: {
        gitUrl: 'https://geektutor',
        twitterUrl: 'https://sijosvoskdv',
      },
    };
  }

  profileViewClick(){
    this.dialogRef.open(SpeakerDetailsModalComponent, {
      data: this.speakerInfo
    })
  }

  ngOnInit(): void {}
}
