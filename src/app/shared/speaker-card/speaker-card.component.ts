import { Component, Input, OnInit } from '@angular/core';

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
  }
}

@Component({
  selector: '[app-speaker-card]',
  templateUrl: './speaker-card.component.html',
  styleUrls: ['./speaker-card.component.scss']
})

export class SpeakerCardComponent implements OnInit {

  @Input('data') speakerInfo: SpeakerInfoI | undefined

  constructor() {
    this.speakerInfo = {
      name: "Akinjobi Sodiq",
      description: "Omo Ologo 5G spending with infinite range, Gojo Saturo from Mushin",
      jobTitle: "Meme King",
      company: "Google",
      socials: {
        gitUrl: "https://geektutor",
        twitterUrl: "https://sijosvoskdv"
      }
    }
  }

  ngOnInit(): void {
  }

}
