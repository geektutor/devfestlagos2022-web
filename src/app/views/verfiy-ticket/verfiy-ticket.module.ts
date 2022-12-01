import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { VerfiyTicketRoutingModule } from './verfiy-ticket-routing.module';
import { VerfiyTicketComponent } from './verfiy-ticket.component';
import { ResponseComponent } from './response/response.component';


@NgModule({
  declarations: [
    VerfiyTicketComponent,
    ResponseComponent
  ],
  imports: [
    CommonModule,
    VerfiyTicketRoutingModule,
    SharedModule,
    CoreModule,
    ReactiveFormsModule
  ]
})
export class VerfiyTicketModule { }
