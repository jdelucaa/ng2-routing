/**
 * Created by joana on 11/06/2017.
 */
import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {Injectable} from '@angular/core'

import {User} from '../shared/models/user';
import {UserService} from '../shared/services/user.service';

@Injectable()
export class AboutUserResolve implements Resolve<User> {

  constructor(private userService: UserService, private router: Router) {

  }

  resolve(route: ActivatedRouteSnapshot) {
    // grab the current username
    const username = route.params['username'];

    return this.userService.getUser(username).then(user => {
      if (user) {
        return user;
      } else {
        // navigate the user back to the about page
        this.router.navigate(['/about']);
        return false;
      }
    });
  }
}
