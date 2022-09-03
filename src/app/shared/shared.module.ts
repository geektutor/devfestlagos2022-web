import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakerCardComponent } from './speaker-card/speaker-card.component';
import { FaqAccordionComponent } from './faq-accordion/faq-accordion.component';
import { MaterialImportsModule } from './material/material.module';

@NgModule({
  declarations: [SpeakerCardComponent, FaqAccordionComponent],
  imports: [CommonModule, MaterialImportsModule],
  exports: [FaqAccordionComponent, SpeakerCardComponent],
})
export class SharedModule {}
