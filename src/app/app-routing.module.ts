import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'speakers',
    loadChildren: () => import('./views/speakers/speakers.module').then(m => m.SpeakersModule)
  },
  {
    path: 'sessions',
    loadChildren: () => import('./views/sessions/sessions.module').then(m => m.SessionsModule)
  },
  {
    path: 'faqs',
    loadChildren: () => import('./views/FAQs/faqs.module').then(m => m.FaqsModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./views/gallery/gallery.module').then(m => m.GalleryModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./views/contact-us/contact-us.module').then(m => m.ContactUsModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
