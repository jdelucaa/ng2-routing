/**
 * Created by joana on 08/06/2017.
 */
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ContactComponent} from './contact/contact.component';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';

const appRoutes: Routes = [
  // redirect example
  /*{
    path: '',
    redirectTo: '/about',
    pathMatch: 'full'
  }*/
  {
    path: '',
    component: HomeComponent
  },
  {
    // for lazy loading
    path: 'about',
    loadChildren: 'app/about/about.module#AboutModule' // so angular doesn't know how to load it, it only knows it when
                                                      // this loadChildren and this path gets hit
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
