/**
 * Created by joana on 08/06/2017.
 */
import {ActivatedRoute} from '@angular/router';
import {Component, OnInit} from '@angular/core';

import {User} from '../shared/models/user';

@Component({
  selector: 'about-page',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  users: User[];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe((data: { users: User[] }) => this.users = data.users);
  }
}
