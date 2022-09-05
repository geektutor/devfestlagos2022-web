import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BannerSectionComponent } from './banner-section/banner-section.component';
import { SpeakersSectionComponent } from './speakers-section/speakers-section.component';
import { SponsorsSectionComponent } from './sponsors-section/sponsors-section.component';
import { SessionsSectionComponent } from './sessions-section/sessions-section.component';
import { GallerySectionComponent } from './gallery-section/gallery-section.component';
import { EventsDetailsSectionComponent } from './events-details-section/events-details-section.component';
import { FaqSectionComponent } from './faq-section/faq-section.component';
import { IntroSectionComponent } from './intro-section/intro-section.component';



@NgModule({
  declarations: [
    HomeComponent,
    BannerSectionComponent,
    SpeakersSectionComponent,
    SponsorsSectionComponent,
    SessionsSectionComponent,
    GallerySectionComponent,
    EventsDetailsSectionComponent,
    FaqSectionComponent,
    IntroSectionComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    CarouselModule
  ]
})
export class HomeModule { }
