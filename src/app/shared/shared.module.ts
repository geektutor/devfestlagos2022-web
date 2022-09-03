import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakerCardComponent } from './speaker-card/speaker-card.component';
import { FaqAccordionComponent } from './faq-accordion/faq-accordion.component';
import { MaterialImportsModule } from './material/material.module';
import { VideoComponent } from './video/video.component';

@NgModule({
  declarations: [
    SpeakerCardComponent,
    FaqAccordionComponent,
    VideoComponent
  ],
  imports: [CommonModule, MaterialImportsModule],
  exports: [
    FaqAccordionComponent,
    SpeakerCardComponent,
    VideoComponent
  ],
})
export class SharedModule {}
