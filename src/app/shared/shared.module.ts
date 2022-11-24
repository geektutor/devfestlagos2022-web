import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { SpeakerCardComponent } from './speaker-card/speaker-card.component';
import { FaqAccordionComponent } from './faq-accordion/faq-accordion.component';
import { MaterialImportsModule } from './material/material.module';
import { VideoComponent } from './video/video.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { SessionCardComponent } from './session-card/session-card.component';
import { SpeakerPopupComponent } from './speaker-popup/speaker-popup.component';


@NgModule({
  declarations: [
    SpeakerCardComponent,
    FaqAccordionComponent,
    VideoComponent,
    PageTitleComponent,
    SessionCardComponent,
    SpeakerPopupComponent,

 

  ],
  imports: [CommonModule, MaterialImportsModule, MatDialogModule],
  exports: [
    FaqAccordionComponent,
    SpeakerCardComponent,
    VideoComponent,
    PageTitleComponent,
    SessionCardComponent,
  ],
  entryComponents: [SpeakerPopupComponent],
})
export class SharedModule {}
