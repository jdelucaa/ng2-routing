/**
 * Created by joana on 08/06/2017.
 */
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

export class User {
  id: number;
  name: string;
  username: string;
  avatar: string;
}

const users: User[] = [
  {
    id: 1,
    name: 'Chris',
    username: 'chrisoncode',
    avatar: 'https://pbs.twimg.com/profile_images/850147482117865472/O28qQSrN.jpg'
  },
  {
    id: 2,
    name: 'Nick',
    username: 'whatnicktweets',
    avatar: 'https://pbs.twimg.com/profile_images/502500686588690432/wXBzuCBj.jpeg'
  },
  {
    id: 3,
    name: 'Holly',
    username: 'hollylawly',
    avatar: 'https://pbs.twimg.com/profile_images/721918869821005824/2qT_RY5M.jpg'
  }
];

@Component({
  templateUrl: 'about-user.component.html',
  styleUrls: ['about-user.component.css']
})

export class AboutUserComponent implements OnInit {
  user;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    // grab the current username
    const username = this.route.snapshot.params['username'];

    this.user = users.find(user => user.username === username);
    console.log(username);
  }

}
