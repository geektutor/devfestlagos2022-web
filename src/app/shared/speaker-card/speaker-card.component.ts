import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SpeakerPopupComponent } from '../speaker-popup/speaker-popup.component';

export interface SpeakerInfoI {
  name: string;
  bio?: string;
  role?: string;
  organization?: string;
  avatar?: string;
  github?: string;
  twitter?: string;
  linkedIn?: string;
}

@Component({
  selector: 'app-speaker-card',
  templateUrl: './speaker-card.component.html',
  styleUrls: ['./speaker-card.component.scss'],
})
export class SpeakerCardComponent implements OnInit {
  @Input('speakerInfo') speakerInfo: SpeakerInfoI | undefined;

  constructor(public dialog: MatDialog) {
    // this.speakerInfo = {
    //   name: "Akinjobi Sodiq",
    //   bio: "Omo Ologo 5G spending with infinite range, Gojo Saturo from Mushin",
    //   role: "Meme King",
    //   organization: "Google",
    //   socials: {
    //     gitUrl: "https://geektutor",
    //     twitterUrl: "https://sijosvoskdv"
    //   }
    // }
  }

  ngOnInit(): void {}

  openSpeaker(
    data: any,
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ) {
    this.dialog.open(SpeakerPopupComponent, {
      data,
      enterAnimationDuration,
      exitAnimationDuration,
      panelClass: 'speaker--popup',
    });
  }
}
