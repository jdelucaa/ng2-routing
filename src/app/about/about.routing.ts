import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AboutComponent} from './about.component';
import {AboutSectionComponent} from './about-section.component';
import {AboutUserComponent} from './about-user/about-user.component';

const aboutRoutes: Routes = [
  {
    path: 'about',
    component: AboutSectionComponent,
    children: [
      {
        // will match about route
        path: '',
        component: AboutComponent
      },
      {
        path: ':username',
        component: AboutUserComponent
      }
    ]
  }
];

export const aboutRouting: ModuleWithProviders = RouterModule.forChild(aboutRoutes);
