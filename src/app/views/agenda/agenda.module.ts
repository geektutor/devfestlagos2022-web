import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { AgendaRoutingModule } from './agenda-routing.module';
import { AgendaComponent } from './agenda.component';

@NgModule({
  declarations: [AgendaComponent],
  imports: [CommonModule, AgendaRoutingModule, SharedModule, CoreModule],
})
export class AgendaModule {}
