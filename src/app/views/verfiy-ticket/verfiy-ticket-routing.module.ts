import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerfiyTicketComponent } from './verfiy-ticket.component';

const routes: Routes = [{ path: '', component: VerfiyTicketComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerfiyTicketRoutingModule { }
