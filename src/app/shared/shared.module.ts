import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakerCardComponent } from './speaker-card/speaker-card.component';
import { FaqAccordionComponent } from './faq-accordion/faq-accordion.component';
import { MaterialImportsModule } from './material/material.module';
import { VideoComponent } from './video/video.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { SpeakerDetailsModalComponent } from './speaker-details-modal/speaker-details-modal.component';

@NgModule({
  declarations: [
    SpeakerCardComponent,
    FaqAccordionComponent,
    VideoComponent,
    PageTitleComponent,
    SpeakerDetailsModalComponent,
  ],
  imports: [CommonModule, MaterialImportsModule],
  exports: [
    FaqAccordionComponent,
    SpeakerCardComponent,
    VideoComponent,
    PageTitleComponent
  ],
})
export class SharedModule {}
