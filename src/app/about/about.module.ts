/**
 * Created by joana on 11/06/2017.
 */
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {AboutComponent} from './about.component';
import {AboutSectionComponent} from './about-section.component';
import {aboutRouting} from './about.routing';
import {AboutUserComponent} from './about-user/about-user.component';
import {AboutUsersResolve} from './about-resolve.service';
import {UserService} from '../shared/services/user.service';

@NgModule({
  imports: [
    aboutRouting,
    CommonModule
  ],
  declarations: [
    AboutComponent,
    AboutSectionComponent,
    AboutUserComponent
  ],
  providers: [
    AboutUsersResolve,
    UserService
  ]
})
export class AboutModule {}
