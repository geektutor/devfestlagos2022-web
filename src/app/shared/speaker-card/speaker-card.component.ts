import { Component, Input, OnInit } from '@angular/core';

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

  constructor() {
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
}
