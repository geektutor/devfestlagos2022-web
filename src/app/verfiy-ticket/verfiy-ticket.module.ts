import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerfiyTicketRoutingModule } from './verfiy-ticket-routing.module';
import { VerfiyTicketComponent } from './verfiy-ticket.component';


@NgModule({
  declarations: [
    VerfiyTicketComponent
  ],
  imports: [
    CommonModule,
    VerfiyTicketRoutingModule
  ]
})
export class VerfiyTicketModule { }
