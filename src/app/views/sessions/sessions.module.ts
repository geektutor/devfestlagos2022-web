import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { SessionsRoutingModule } from './sessions-routing.module';
import { SessionsComponent } from './sessions.component';

@NgModule({
  declarations: [SessionsComponent],
  imports: [CommonModule, SessionsRoutingModule, SharedModule],
})
export class SessionsModule {}
