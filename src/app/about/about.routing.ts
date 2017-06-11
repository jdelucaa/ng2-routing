import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AboutComponent} from './about.component';
import {AboutSectionComponent} from './about-section.component';
import {AboutUserComponent} from './about-user/about-user.component';
import {AboutUsersResolve} from './about-resolve.service';

const aboutRoutes: Routes = [
  {
    path: '',
    component: AboutSectionComponent,
    children: [
      {
        // will match about route
        path: '',
        component: AboutComponent,
        resolve: {
          users: AboutUsersResolve
        }
      },
      {
        path: ':username',
        component: AboutUserComponent
      }
    ]
  }
];

export const aboutRouting: ModuleWithProviders = RouterModule.forChild(aboutRoutes);
