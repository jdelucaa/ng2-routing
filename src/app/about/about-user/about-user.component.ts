/**
 * Created by joana on 08/06/2017.
 */
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {User} from '../../shared/models/user';
import {UserService} from '../../shared/services/user.service';

@Component({
  templateUrl: 'about-user.component.html',
  styleUrls: ['about-user.component.css']
})

export class AboutUserComponent implements OnInit {
  user: User;

  constructor(private route: ActivatedRoute, private userService: UserService) {

  }

  ngOnInit() {
    // grab the current username
    const username = this.route.snapshot.params['username'];

    this.userService.getUser(username).then(user => this.user = user);
  }
}
