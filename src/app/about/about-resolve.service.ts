/**
 * Created by joana on 11/06/2017.
 */
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';

import {User} from '../shared/models/user';
import {UserService} from '../shared/services/user.service';

@Injectable()
export class AboutUsersResolve implements Resolve<User[]> {

  constructor(private userService: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.userService.getUsers().then(users => users);
  }
}
