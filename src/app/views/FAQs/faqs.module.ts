import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { FaqsRoutingModule } from './faqs-routing.module';
import { FaqsComponent } from './faqs.component';

@NgModule({
  declarations: [FaqsComponent],
  imports: [CommonModule, FaqsRoutingModule, SharedModule],
})
export class FaqsModule {}
