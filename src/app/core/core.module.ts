import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoaderComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LoaderComponent
  ]
})
export class CoreModule { }
