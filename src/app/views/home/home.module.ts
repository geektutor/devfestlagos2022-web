import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BannerSectionComponent } from './banner-section/banner-section.component';
import { SpeakersSectionComponent } from './speakers-section/speakers-section.component';
import { SponsorsSectionComponent } from './sponsors-section/sponsors-section.component';


@NgModule({
  declarations: [
    HomeComponent,
    BannerSectionComponent,
    SpeakersSectionComponent,
    SponsorsSectionComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
